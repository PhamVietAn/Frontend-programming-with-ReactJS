import React, { useState } from 'react'

export default function Ex02() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<{ name: string; email: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setResult(formData)
    setSubmitted(true)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Thông tin người dùng</h2>
        <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} />
        <br />
        <input type="text" name="email" id="email" onChange={handleChange} value={formData.email} />
        <br />
        <button type="submit">Gửi</button>

        {submitted && result && (
          <div>
            <p>Tên: {result.name}</p>
            <p>Email: {result.email}</p>
          </div>
        )}
      </form>
    </div>
  )
}
