import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-[50%] w-full">
      <div
        className="p-10 flex gap-4 overflow-x-auto flex-nowrap h-full"
        id="tasklist"
      >
        {user?.tasks?.map((task) => (
          <div
            key={task.id}
            className="bg-red-300 w-[20%] h-full rounded-lg shrink-0"
          >
            <div className="flex justify-between items-center p-4">
              <h1 className="bg-red-500 p-2 rounded text-sm">
                {task.category}
              </h1>
              <h2 className="font-semibold text-sm">{task.date}</h2>
            </div>

            <div className="p-4 flex flex-col justify-between h-[70%]">
              <div>
                <h1 className="font-semibold text-xl">{task.title}</h1>

                <p className="text-sm mt-5">{task.description}</p>
              </div>
              <div>
                <p className="mt-3 text-xs font-semibold">
                  Status: {task.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
