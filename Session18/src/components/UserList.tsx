import { useMemo } from 'react';

const users = [
    { id: 1, name: 'An', age: 19 },
    { id: 2, name: 'Bình', age: 18 },
    { id: 3, name: 'Dương', age: 20 },
    { id: 4, name: 'Yến', age: 25 },
    { id: 5, name: 'Tiến', age: 15 }
];

export default function UserList() {
    const filteredUsers = useMemo(() => users.filter(user => user.age > 18), []);

    return (
        <div>
            <h3>Danh sách người dùng trên 18 tuổi:</h3>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.age} tuổi)
                    </li>
                ))}
            </ul>
        </div>
    );
}
