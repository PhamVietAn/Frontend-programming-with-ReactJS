import { useReducer } from 'react'

const initialState = 0;

function reducer(state: number, action: { type: string }) {
    switch (action.type) {
        case 'Tang':
            return state + 1;
        case 'Giam':
            return state - 1;
        default:
            return state;
    }
}

export default function Ex07() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const handleChange = (type: 'Tang' | 'Giam') => {
        dispatch({ type });
    }
  return (
    <div>
        <p>Số đếm: {count}</p>
        <button onClick={() => handleChange('Tang')}>Tăng</button>
        <button onClick={() => handleChange('Giam')}>Giảm</button>
    </div>
  )
}
