
import { useReducer } from 'react';

type State = {
    name: string;
    email: string;
};

type Action =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_EMAIL'; payload: string };

const initialState: State = {
    name: '',
    email: '',
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        default:
            return state;
    }
}

export default function Ex08() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>User Information Form</h2>
            <div style={{ marginBottom: 16 }}>
                <label>Tên:</label>
                <br />
                <input
                    type="text"
                    value={state.name}
                    onChange={e => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                />
                <br />
                <label>Email:</label>
                <br />
                <input
                    type="email"
                    value={state.email}
                    onChange={e => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                />
            </div>
            <div>
                <b style={{ fontSize: 18 }}>Thông tin người dùng:</b>
                <div style={{ marginTop: 8 }}>
                    <div><b>Tên:</b> {state.name ? state.name : '(Chưa nhập)'}</div>
                    <div><b>Email:</b> {state.email ? state.email : '(Chưa nhập)'}</div>
                </div>
            </div>
        </div>
    );
}
