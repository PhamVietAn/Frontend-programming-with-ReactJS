import { useAppDispatch, useAppSelector } from '../../hooks/useHook';
import { random } from './RandomListSlice';

export default function RandomList() {
    const dispatch = useAppDispatch();
    const number = useAppSelector((state) => state.random);
    
    const handleRandom = () => {
        const value = Array.from({length: 4}, () => Math.floor(Math.random() * 100) + 1);
        dispatch(random(value));
        
    }
  return (
    <div>
        <h2 className='text-2xl font-bold'>ListNumber: [{number.join(", ")}]</h2>
        <button onClick={handleRandom} className='bg-gray-200 hover:bg-gray-300 border border-black rounded-md px-4 py-2'>Random</button>
    </div>
  )
}
