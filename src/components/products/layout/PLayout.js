export default function PLayout({ children }) {
  return (
    <div className="py-8 lg:pt-16 lg:pb-8">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
