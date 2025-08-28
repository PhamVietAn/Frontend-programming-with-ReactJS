
import { useReducer } from 'react';

interface Action { 
    type: 'INCREASE' 
}

export default function Increase() {
    const [count, dispatch] = useReducer((state: number, action: Action) => action.type === 'INCREASE' ? state + 1 : state, 0);

    return (
        <div>
            <div style={{ fontSize: 32 }}>{count}</div>
            <button onClick={() => dispatch({ type: 'INCREASE' })}>
                Increase
            </button>
        </div>
    );
}