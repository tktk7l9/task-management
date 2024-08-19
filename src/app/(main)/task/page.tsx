import { Task } from "@/app/api/tasks/route";

const getTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET",
    cache: "no-cache",
  });
  return await response.json();
};

const TaskPage = async () => {
  const tasks = (await getTasks()).tasks as Task[];
  return (
    <div>
      <div>TaskPage</div>
      <div>
        {tasks.map((task) => {
          return <div key={task.id}>{task.name}</div>;
        })}
      </div>
    </div>
  );
};

export default TaskPage;
