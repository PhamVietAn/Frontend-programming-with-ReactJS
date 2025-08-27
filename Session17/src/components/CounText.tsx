import React, { useState } from "react";

export default function CounText() {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <textarea rows={5} cols={50} placeholder="Nhập nội dung" value={text} onChange={handleChange} style={{ padding: "8px" }} />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}

