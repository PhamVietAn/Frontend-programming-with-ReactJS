import React, { useState } from "react";

export default function Select() {
  const [city, setCity] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <label htmlFor="city">Thành phố: {city && <span>{city}</span>}</label>
      <br />
      <select id="city" value={city} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Đà Nẵng">Đà Nẵng</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        <option value="Thanh Hoá">Thanh Hoá</option>
      </select>

      
    </div>
  );
}
