import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ updateTaskStatus }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full">
      <div
        className="p-4 sm:p-6 md:p-10 flex gap-4 overflow-x-auto flex-nowrap"
        id="tasklist"
      >
        {user?.tasks?.map((task) => (
          <div
            key={task.id}
            className="bg-red-300 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[25%] xl:w-[20%] rounded-lg shrink-0"
          >
            <div className="flex justify-between items-center p-4">
              <h1 className="bg-red-500 px-3 py-1 rounded text-xs sm:text-sm">
                {task.category}
              </h1>
              <h2 className="font-semibold text-xs sm:text-sm">{task.date}</h2>
            </div>

            <div className="p-4 flex flex-col justify-between h-[70%]">
              <div>
                <h1 className="font-semibold text-lg sm:text-xl">
                  {task.title}
                </h1>

                <p className="text-xs sm:text-sm mt-3 sm:mt-5">
                  {task.description}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <p className="text-xs font-semibold text-black!">Status:</p>

                <select
                  className="border border-black rounded px-2 py-1 text-xs bg-red-300 text-black! outline-none"
                  value={task.status || ""}
                  onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                >
                  <option value="" disabled>
                    -- Select --
                  </option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;