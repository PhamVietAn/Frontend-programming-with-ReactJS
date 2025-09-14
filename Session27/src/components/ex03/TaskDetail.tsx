import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "../../data/task";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        Công việc không tồn tại.
        <div>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">{task.title}</h2>
      <p className="mb-6 text-lg">{task.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Quay lại
      </button>
    </div>
  );
}