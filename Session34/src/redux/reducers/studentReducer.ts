export type Student = {
    id: string;
    name: string;
    age: number;
    gender: 'Nam' | 'Nữ';
    birthday?: string;
    hometown?: string;
    address?: string;
}

export const initialStudents: Student[] = [
    { id: 'SV001', name: 'Nguyễn Văn A', age: 20, gender: 'Nam' },
    { id: 'SV002', name: 'Nguyễn Văn B', age: 21, gender: 'Nữ' },
    { id: 'SV003', name: 'Nguyễn Văn C', age: 19, gender: 'Nam' },
]

type Action =
    | { type: 'ADD_STUDENT'; payload: Student }
    | { type: 'REMOVE_STUDENT'; payload: string }
    | { type: 'UPDATE_STUDENT'; payload: Student }
    | { type: 'SEARCH_STUDENT'; payload: string };

const studentReducer = (state: Student[] = initialStudents, action?: Action): Student[] => {
    switch (action?.type) {
        case 'ADD_STUDENT':
            return [...state, action.payload];
        case 'REMOVE_STUDENT':
            return state.filter(student => student.id !== action.payload);
        case 'UPDATE_STUDENT':
            return state.map(student =>
                student.id === action.payload.id ? action.payload : student
            );
        case 'SEARCH_STUDENT':
            return initialStudents.filter(student =>
                student.name.toLowerCase().includes(action.payload.toLowerCase())
            );
        default:
            return state;
    }
};

export default studentReducer;