import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskListNumber = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-wrap gap-4 p-4 sm:p-6 md:p-10">

      <div className="bg-red-400 p-6 w-full sm:w-[48%] lg:w-[30%] rounded-xl">
        <h2 className="text-2xl sm:text-3xl p-2">{user?.tasks?.length || 0}</h2>
        <h1 className="text-xl sm:text-2xl p-2">Total Task</h1>
      </div>

      <div className="bg-green-800 p-6 w-full sm:w-[48%] lg:w-[30%] rounded-xl">
        <h2 className="text-2xl sm:text-3xl p-2">
          {user?.tasks?.filter((task) => task.status === "completed").length || 0}
        </h2>
        <h1 className="text-xl sm:text-2xl p-2">Completed Task</h1>
      </div>

      <div className="bg-yellow-600 p-6 w-full sm:w-[48%] lg:w-[30%] rounded-xl">
        <h2 className="text-2xl sm:text-3xl p-2">
          {user?.tasks?.filter((task) => task.status === "active").length || 0}
        </h2>
        <h1 className="text-xl sm:text-2xl p-2">Active Task</h1>
      </div>

    </div>
  );
};

export default TaskListNumber;