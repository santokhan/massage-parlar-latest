export default function List({ children }) {
  return <ul className="flex flex-col gap-3">{children}</ul>;
}
export function Item({ children }) {
  return (
    <li className="text-textgray group border-l-2 border-green-700 px-3">
      {/* <div className="h-3 w-3 bg-green-700 rounded-full shadow-md shadow-green-700/75 group-hover:bg-green-900"></div> */}
      <div>{children}</div>
    </li>
  );
}
