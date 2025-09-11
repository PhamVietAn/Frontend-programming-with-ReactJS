import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  return (
    <div>
      <h3>Chi tiết Team</h3>
      <p>Team ID: <span className="font-bold">{teamId}</span></p>
    </div>
  );
}