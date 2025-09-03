import { useRef, useState } from 'react'

export default function Ex06() {
    const [open, setOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
        <h1>Ứng dụng React với Modal và Focus Input</h1>
        <button onClick={() => setOpen(true)}>Mở modal</button>
        {open && (
            <div
            style={{
                position: "fixed",
                top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000
            }}
            >
            <div
                style={{
                background: "#fff",
                padding: 32,
                borderRadius: 8,
                minWidth: 320,
                textAlign: "center"
                }}
            >
                <h2>Đăng nhập</h2>
                <input ref={inputRef} type="text" placeholder="Nhập tên người dùng" />
                <div style={{ marginTop: 16 }}>
                <button onClick={() => setOpen(false)}>Đóng</button>
                </div>
            </div>
            </div>
        )}
    </div>

  )
}
