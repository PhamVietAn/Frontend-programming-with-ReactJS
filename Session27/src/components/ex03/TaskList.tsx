import { Link } from "react-router-dom";
import { tasks } from "../../data/task";

export default function TaskList() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Danh sách công việc</h1>
      <div className="flex flex-col gap-6">
        {tasks.map(task => (
          <div
            key={task.id}
            className="bg-gray-50 border rounded-xl p-6 shadow flex flex-col gap-2"
          >
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
            <Link
              to={`/task/${task.id}`}
              className="text-blue-600 hover:underline text-sm mt-2"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}