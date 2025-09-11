import { useSearchParams } from "react-router-dom";

export default function Ex04() {
  const [searchParams] = useSearchParams();
  const studentName = searchParams.get("studentName");

  return (
    <div>
      <p>Kết quả mong đợi: <span className="font-bold">{studentName}</span></p>
    </div>
  );
}