import { useState, useCallback } from 'react';

export default function ColorPicker() {
    const [color, setColor] = useState('#000000');

    const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }, []);

    return (
        <div>
            <div style={{ fontSize: 28 }}>Màu người dùng chọn:</div>
            <input type="color" value={color} onChange={handleChangeColor} />
            <div style={{ fontSize: 28, marginTop: 16 }}>Màu hiển thị:</div>
            <div style={{width: 200, height: 100, background: color, border: '1px solid #ccc', marginTop: 8}}></div>
        </div>
    );
}