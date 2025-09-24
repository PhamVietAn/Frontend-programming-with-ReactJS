import { useAppDispatch, useAppSelector } from "../../hooks/useHook"
import { Change } from "./DarkLightSlice";


export default function DarkLight() {
    const mode = useAppSelector((state) => state.darklight)
    
    const dispatch = useAppDispatch();
  return (
    <div className={`${mode === "sang" ? "bg-black text-white" : "bg-white text-black"} min-h-screen flex items-center justify-center`}>
        <button onClick={() => dispatch(Change())} className={`px-4 py-2 border rounded ${mode === "sang" ? "bg-node text-white border-white" : "bg-none text-black border-black"}`}>
            Change
        </button>
    </div>
  )
}
