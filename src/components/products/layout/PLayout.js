export default function PLayout({ children, className }) {
  return (
    <div className={`py-8 lg:pt-16 lg:pb-8 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
