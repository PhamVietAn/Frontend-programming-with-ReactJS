
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/stores/index";

export default function ChangeState() {
  const stateString = useSelector((state: RootState) => state.changeState);
  const dispatch = useDispatch();
  const handleChangeState = () => {
    dispatch({ type: "CHANGE" });
  };
  return (
    <div>
      <h2>{stateString}</h2>
      <button onClick={handleChangeState}>Change State</button>
    </div>
  );
}