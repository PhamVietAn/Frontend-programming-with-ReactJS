import { useState } from "react";

export default function Ex04() {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    }
  return (
    <div>
        <button onClick={handleToggle}>{isVisible ? "Ẩn" : "Hiện"}</button>
        {isVisible && <p>Tiêu đề văn bản</p>}
    </div>
  )
}
