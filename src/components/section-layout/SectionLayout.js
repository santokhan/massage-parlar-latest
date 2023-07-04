export default function SLayout({ children, className = "" }) {
  return (
    <section className={"relative " + className}>
      <div className={"py-8 lg:py-16 relative " + className}>
        <div className="max-w-7xl mx-auto p-4">{children}</div>
      </div>
    </section>
  );
}
export function SMain({ children }) {
  return (
    <div className="flex flex-wrap justify-center gap-12 py-8 relative">
      {children}
    </div>
  );
}
export function SHeader({ children }) {
  return <div className="text-center flex flex-col gap-4 px-4">{children}</div>;
}
export function SIcon({ children }) {
  return <div className="flex justify-center">{children}</div>;
}
export function STitle({ children, className = "" }) {
  return (
    <div className={"text-2xl font-semibold uppercase playfair " + className}>
      {children}
    </div>
  );
}
export function SDes({ children }) {
  return <div className="text-base">{children}</div>;
}
