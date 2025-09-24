
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../stores'
import { decrease, increase, reset } from './CounterSlice';

export default function Counter() {
    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increase());
    };
    const handleDecrease = () => {
        dispatch(decrease());
    };
    const handleReset = () => {
        dispatch(reset());
    };
  return (
    <div>
        <h2 className='text-2xl font-bold'>{value}</h2>
        <button onClick={handleIncrease} className='bg-gray-200 hover:bg-gray-300 border border-black rounded-md px-4 py-2'>Increase</button>
        <button onClick={handleDecrease} className='bg-gray-200 hover:bg-gray-300 border border-black rounded-md px-4 py-2'>Decrease</button>
        <button onClick={handleReset} className='bg-gray-200 hover:bg-gray-300 border border-black rounded-md px-4 py-2'>Reset</button>
    </div>
  )
}
