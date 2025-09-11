import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const {id} = useParams();
  return (
    <div>
        <h1 className='text-2xl font-bold'>ID: {id}</h1>
    </div>
  )
}
