import { useReducer } from 'react';

interface Action {
    type: 'CHANGE', 
    value: string
}

export default function InputText() {
    const [text, dispatch] = useReducer((state: string, action: Action) => action.type === 'CHANGE' ? action.value : state,'');

    return (
        <div>
            <h1>{text}</h1>
            <input type="text" value={text} onChange={e => dispatch({ type: 'CHANGE', value: e.target.value })} placeholder="Input change" />
            
        </div>
    );
}