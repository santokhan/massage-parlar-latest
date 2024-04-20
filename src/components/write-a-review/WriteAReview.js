import { Dialog, Transition } from '@headlessui/react';
import { ArrowRight, CloseCircle, User } from 'iconsax-react';
import { Fragment, useState } from 'react';
import sanityClient from '../../sanity/sanityClient';

export default function WriteAReview({ refetch }) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        image: null,
        imagePreview: null,
        ratings: 5,
    });

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setFormData((prevData) => ({
                ...prevData,
                image: file,
                imagePreview: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }


    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Extract image file and other form data
        const image = formData.get('image'); // Get the File object for the image
        const name = formData.get('name');
        const message = formData.get('message');
        const ratings = formData.get('ratings');

        // // Ensure that all required data is present before proceeding
        // if (!name || !message || !image) {
        //     alert('Please fill out all required fields (name, message, image)');
        //     return;
        // }

        // Upload image to Sanity asset store
        const uploadTask = sanityClient.assets.upload('image', image);

        uploadTask
            .then(imageAsset => {
                // Once image is uploaded, create the review document
                return sanityClient.create({
                    _type: 'reviews',
                    image: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id, // Reference to the uploaded image asset
                        },
                    },
                    name: name,
                    message: message,
                    ratings: ratings,
                });
            })
            .then(() => {
                // Review submitted successfully
                alert('Review submitted!');

                // Clear form input
                setFormData({
                    name: '',
                    message: '',
                    image: null,
                    imagePreview: null,
                    ratings: 5,
                });

                // Optionally trigger a refetch of ratings or update the UI
                refetch();
            })
            .catch(error => {
                console.error('Error submitting review:', error);
                alert('An error occurred while submitting the review. Please try again.');
            });

        closeModal(); // Assuming `closeModal` closes the review submission modal
    }

    return (
        <>
            <div className="">
                <button
                    type='button'
                    onClick={openModal}
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-lg text-sm px-4 py-2 lg:px-4 lg:py-2.5 focus:outline-none capitalize flex items-center gap-2 order-3"
                >
                    <span className="font-medium whitespace-nowrap">Write a review</span>
                    <ArrowRight className='w-5 h-5' />
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto px-4 py-20">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <button type="button" onClick={() => {
                                        setFormData({ name: '', message: '', image: null, imagePreview: null });
                                        closeModal();
                                    }} className='absolute top-4 right-4 hover:opacity-75'>
                                        <CloseCircle className='w-6 h-6' />
                                    </button>

                                    <div className="bg-white p-6 rounded-md shadow-md">
                                        <h2 className="text-2xl font-semibold mb-4 text-center">Leave a Review</h2>

                                        <form id="reviewForm" onSubmit={handleSubmit} className='space-y-6'>
                                            <div className="space-y-2">
                                                <div className='text-sm'>Profile</div>
                                                <label className="border-2 border-gray-300 border-dashed rounded-full w-32 h-32 overflow-hidden cursor-pointer block bg-gray-50">
                                                    {formData.imagePreview ? (
                                                        <img
                                                            src={formData.imagePreview}
                                                            alt="Preview"
                                                            className="w-full h-full"
                                                        />
                                                    ) : (
                                                        <User className='w-full h-full text-gray-600 p-4' />
                                                    )}
                                                    <input
                                                        type="file"
                                                        id="image"
                                                        name="image"
                                                        onChange={handleImageChange}
                                                        className="hidden"
                                                    />
                                                </label>

                                                <div className="mb-4 space-y-1">
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2.5"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Message Input */}
                                            <div className="space-y-1">
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    rows={5}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2.5"
                                                    required
                                                />
                                            </div>

                                            <div className="">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    <div>Ratings</div>
                                                    <input type="number" name="ratings" value={formData.ratings} className={"opacity-0"} />
                                                    <div className="flex gap-1 text-yellow-500 relative">
                                                        {
                                                            Array(5).fill(null).map((_, i) => (
                                                                <Fragment key={i}>
                                                                    <button type='button' className="h-5 w-5 flex-shrink-0" onClick={() => {
                                                                        handleInputChange({ target: { name: 'ratings', value: i + 1 } });
                                                                    }}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill={i + 1 <= formData.ratings ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 flex-shrink-0">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                                                        </svg>
                                                                    </button>
                                                                </Fragment>
                                                            ))
                                                        }
                                                    </div>
                                                </label>
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-lg text-sm px-4 py-2 lg:px-4 lg:py-2.5 focus:outline-none capitalize flex items-center gap-2 order-3"
                                            >
                                                Submit Review
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
