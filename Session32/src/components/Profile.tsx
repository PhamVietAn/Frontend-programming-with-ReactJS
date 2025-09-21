import { useDispatch } from "react-redux";


export default function Profile() {
    const dispatch = useDispatch();
    const handlelog = () => {
        dispatch({type: "LOG"})
    }


  return (
    <div>
      <button onClick={handlelog}>Log</button>
    </div>
  )
}
