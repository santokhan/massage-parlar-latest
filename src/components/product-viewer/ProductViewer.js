import BookNow from "../products/layout/BookNow";

export default function ProductViewer({ className = "", children }) {
  return (
    <div className={className}>
      <section className="pt-40 px-4">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 bg-green-100 rounded-2xl">
          {children}
        </div>
      </section>
    </div>
  );
}
export function TitleDescBox({ price, time, children, className }) {
  return (
    <div className="mr-auto place-self-center col-12 lg:col-span-7 pl-4 lg:pl-8 order-2 lg:order-1 py-16">
      {children}
      <div className="flex justify-start gap-4"></div>
    </div>
  );
}
export function Title({ children, className }) {
  return (
    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
      {children}
    </h1>
  );
}
export function Desc({ children, className }) {
  return (
    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
      {children}
    </p>
  );
}
export function Image({
  src = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
  className,
}) {
  return (
    <div className="lg:mt-0 col-12 lg:col-span-5 lg:flex px-5 lg:pl-8 order-1 lg:order-2 max-h-[384px] max-w-[420px]">
      <img
        src={src}
        alt="mockup"
        className="-translate-y-8 rounded-xl object-cover w-full h-full"
      />
    </div>
  );
}
export function Price({ price, time, children, className }) {
  return (
    <div className={"flex justify-start gap-8 " + className}>
      <div className="text-green-800 text-3xl font-semibold">
        €{price}/<span className="text-base">{time} minuten</span>
      </div>
      <BookNow className="px-0" to="/appointments"></BookNow>
      {children}
    </div>
  );
}
