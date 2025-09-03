import React, { useState } from 'react'

export default function Ex01() {
    const [inputLength, setInputLength] = useState(0)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputLength(e.target.value.length)
    }

  return (
    <div>
        <h3>Kiểm tra độ dài chuỗi nhập vào</h3>
        <input type="text" placeholder='Nhập vào đây' onChange={handleChange}/>
        {inputLength > 5 && <p style={{color: 'red'}}>Do dai chuoi nhap vao lon hon 5</p>}

    </div>
  )
}
