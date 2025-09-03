import React, { useEffect, useState  } from 'react'

export default function Ex04() {
    const [text,setText] = useState("");
    useEffect(() => {
        document.title = text || "Trang chủ";
    }, [text]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
  return (
    <div>
        <h1>Chào mừng bạn đến với trang của chúng tôi!</h1>
        <input type="text" placeholder='nhập tên của bạn' onChange={handleChange} value={text}/>
        <p>Tiêu đề trang sẽ thay đổi khi bạn nhập</p>
    </div>
  )
}
