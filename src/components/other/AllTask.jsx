const AllTask = () => {
  const usersData = JSON.parse(localStorage.getItem("users"))?.filter(
    (user) => user.role === "employee",
  );

  return (
    <div
      className="flex flex-col gap-3 w-full h-[70vh] overflow-y-auto"
      id="allTask"
    >
      {/* Header */}
      <div className="p-4 grid grid-cols-[2fr_1fr_1fr_1fr] rounded-lg bg-gray-900 sticky top-0 z-10 font-semibold">
        <h1 className="text-left">Name</h1>
        <h1 className="text-center">Total Tasks</h1>
        <h1 className="text-center">Active</h1>
        <h1 className="text-center">Completed</h1>
      </div>

      {/* Rows */}
      {usersData.map((user) => (
        <div
          key={user.id}
          className="p-4 grid grid-cols-[2fr_1fr_1fr_1fr] rounded-lg border border-gray-700"
        >
          <h1 className="text-left">{user.name}</h1>
          <h1 className="text-center">{user.tasks.length}</h1>
          <h1 className="text-center">
            {user.tasks.filter((t) => t.status === "active").length}
          </h1>
          <h1 className="text-center">
            {user.tasks.filter((t) => t.status === "completed").length}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
