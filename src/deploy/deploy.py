import os
from ftplib import FTP, error_perm

# FTP details
ftp_host = "156.67.74.188"  # Replace with your cPanel FTP host
ftp_user = "u317450360"  # Replace with your FTP username
ftp_pass = "A9^Oun>vng;rk7s^"  # Replace with your FTP password
remote_path = "/domains/ahmassage.nl/public_html/"  # Remote path where files will be uploaded (usually '/public_html/')
local_build_path = "build/"


def upload_file(ftp, local_file, remote_file):
    """Upload a single file to the FTP server."""
    try:
        # Check if file exists on FTP server before uploading
        try:
            ftp.size(remote_file)  # Try to get file size (if file exists)
            print(f"Skipping {remote_file}: file already exists on the server.")
            return  # Skip the file if it exists
        except error_perm as e:
            # error_perm indicates permission errors or file not found
            if "550" in str(e):  # FTP error code for file not found
                pass  # File does not exist, so proceed with upload
            else:
                raise e  # Raise other permission-related errors

        # If the file doesn't exist, upload it
        with open(local_file, "rb") as file:
            ftp.storbinary(f"STOR {remote_file}", file)
        print(f"Uploaded: {local_file} -> {remote_file}")
    except Exception as e:
        print(f"Failed to upload {local_file}: {e}")


def upload_directory(ftp, local_dir, remote_dir):
    """Recursively upload a directory to the FTP server."""
    for root, dirs, files in os.walk(local_dir):
        for file in files:
            local_file = os.path.join(root, file)
            # Construct the relative path to preserve the directory structure
            relative_path = os.path.relpath(local_file, local_dir)

            # Ensure the remote file path uses forward slashes
            remote_file = os.path.join(remote_dir, relative_path).replace(os.sep, "/")

            # Create the remote directory structure if it doesn't exist
            remote_dir_path = os.path.dirname(remote_file)
            try:
                # Try changing to the directory, if it fails, create the directory
                ftp.cwd(remote_dir_path)  # Try changing to the directory
            except Exception as e:
                # If directory doesn't exist, create it
                print(f"Creating directory {remote_dir_path}...")
                dirs_to_create = remote_dir_path.split("/")
                current_path = ""
                for part in dirs_to_create:
                    current_path = os.path.join(current_path, part)
                    try:
                        ftp.cwd(current_path)  # Try to change to that directory
                    except Exception:
                        ftp.mkd(
                            current_path
                        )  # Create the directory if it doesn't exist
                        ftp.cwd(current_path)  # Change to the newly created directory

            # Upload the file (or skip if already exists)
            upload_file(ftp, local_file, remote_file)


def main():
    try:
        ftp = FTP(ftp_host)
        ftp.login(ftp_user, ftp_pass)
        ftp.set_pasv(True)

        print("Connected to FTP server")

        # Start uploading directory
        upload_directory(ftp, local_build_path, remote_path)

        ftp.quit()
        print("Upload complete and connection closed.")

    except Exception as e:
        print(f"FTP connection failed: {e}")


if __name__ == "__main__":
    main()
