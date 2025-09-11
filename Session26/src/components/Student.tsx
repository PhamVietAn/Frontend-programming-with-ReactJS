import { useParams } from "react-router-dom"


export default function Student() {
    const name = useParams().name;
  return (
    <div className='text-2xl font-bold'>Name = {name}</div>
  )
}
