import { useAppDispatch, useAppSelector } from "../../hooks/useHook";
import { toggleView } from "./ChangeInterfaceSlice";

const data = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

export default function ChangeInterface() {
  const mode = useAppSelector((state) => state.changeInterface.viewMode);
  const dispatch = useAppDispatch();
  

  return (
    <div className="p-6">
      <button
        onClick={() => dispatch(toggleView())}
        className="px-4 py-2 text-black border border-gray-300 rounded mb-4"
      >
        {mode === "list" ? "Grid mode" : "List mode"}
      </button>

      {mode === "list" ? (
        <ul className="space-y-2">
          {data.map((item) => (
            <li
              key={item.id}
              className="flex justify-between p-4 bg-red-500 rounded"
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded text-center bg-red-500"
            >
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}