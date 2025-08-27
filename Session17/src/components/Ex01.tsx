import { useState } from 'react'

export default function Ex01() {
    const [name] = useState("Phạm Việt An");
  return (
    <div>
      <h1>Họ và tên: {name}</h1>
    </div>
  )
}
