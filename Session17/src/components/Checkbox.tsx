import { useState } from 'react';

const hobbies = ['Đi chơi', 'Code', 'Bơi lội', 'Nhảy dây'];

export default function Checkbox() {
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (hobby: string) => {
        setSelected(prev =>
            prev.includes(hobby) ? prev.filter(item => item !== hobby) : [...prev, hobby]
        );
    };

    return (
        <div>
            <div>Sở thích: [{selected.map(h => `"${h}"`).join(', ')}]</div>
            {hobbies.map(hobby => (
                <div key={hobby}>
                    <input type="checkbox" checked={selected.includes(hobby)} onChange={() => handleChange(hobby)} />
                    {hobby}
                </div>
            ))}
        </div>
    );
}