export default function Price({ price, time, children, className }) {
  return (
    <div className={"flex justify-between gap-8 " + className}>
      <div className="text-green-800 text-3xl font-semibold">
        ${price}/<span className="text-base">{time} minuten</span>
      </div>
      {children}
    </div>
  );
}
