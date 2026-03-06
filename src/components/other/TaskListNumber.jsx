const TaskListNumber = () => {
  return (
    <div className="flex gap-4 p-10">
      <div className=" bg-red-400 p-6 w-[45%] rounded-xl">
        <h2 className="text-3xl p-2">0</h2>
        <h1 className="text-4xl p-2">New Task</h1>
      </div>
      <div className=" bg-green-800 p-6 w-[45%] rounded-xl">
        <h2 className="text-3xl p-2">0</h2>
        <h1 className="text-4xl p-2">New Task</h1>
      </div>
      <div className=" bg-blue-900 p-6 w-[45%] rounded-xl">
        <h2 className="text-3xl p-2">0</h2>
        <h1 className="text-4xl p-2">New Task</h1>
      </div>
      <div className=" bg-yellow-600 p-6 w-[45%] rounded-xl">
        <h2 className="text-3xl p-2">0</h2>
        <h1 className="text-4xl p-2">New Task</h1>
      </div>
    </div>
  );
};

export default TaskListNumber;
