import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskListNumber = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex gap-4 p-10">
      <div className=" bg-red-400 p-6 w-[45%] rounded-xl">
        <h2 className="text-3xl p-2">{user?.tasks?.length || 0}</h2>
        <h1 className="text-3xl p-2">Total Task</h1>
      </div>
      <div className=" bg-green-800 p-6 w-[45%] rounded-xl">
        <h2 className="text-3xl p-2">
          {user?.tasks?.filter((task) => task.status === "completed").length ||
            0}
        </h2>
        <h1 className="text-3xl p-2">Completed Task</h1>
      </div>
      <div className=" bg-blue-900 p-6 w-[45%] rounded-xl">
        <h2 className="text-3xl p-2">0</h2>
        <h1 className="text-3xl p-2">New Task</h1>
      </div>
      <div className=" bg-yellow-600 p-6 w-[45%] rounded-xl">
        <h2 className="text-3xl p-2">
          {user?.tasks?.filter((task) => task.status === "active").length || 0}
        </h2>
        <h1 className="text-3xl p-2">Active Task</h1>
      </div>
    </div>
  );
};

export default TaskListNumber;
