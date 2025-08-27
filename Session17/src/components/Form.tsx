import React, { useState } from "react";

function Form() {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{marginTop: "50px" }}>
      <input type="text" placeholder="Nhập nội dung" value={value} onChange={handleChange} style={{ padding: "8px", width: "200px" }} />
      <p>{value}</p>
    </div>
  );
}

export default Form;
