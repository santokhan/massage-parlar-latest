import { Link } from "react-router-dom";

export function Row({ children, id }) {
  return (
    <div
      className="w-full bg-white rounded-[2rem] p-3 shadow-2xl shadow-gray-100 hover:-translate-y-1 transition-all ease-out duration-200"
      id={id}
    >
      {children}
    </div>
  );
}
export function Col({ children, order }) {
  return (
    <div className={order === 1 ? "w-full order-1" : "w-full order-2"}>
      {children}
    </div>
  );
}
export function Box({ children }) {
  return <div className="p-5 flex flex-col gap-3">{children}</div>;
}
export function Title({ children }) {
  return <div className="text-xl font-bold">{children}</div>;
}
export function Image({ src }) {
  return (
    <div className="w-full h-60 xl:h-[420px] flex justify-center items-center rounded-[20px] overflow-hidden">
      <img src={src} alt="card" className="w-full h-full object-cover " />
    </div>
  );
}
export function DetailsLink({ to, children }) {
  return (
    <Link
      to="/meer-over-stoelmassage-massages"
      className="hover:underline text-green-800"
    >
      {children}
    </Link>
  );
}
