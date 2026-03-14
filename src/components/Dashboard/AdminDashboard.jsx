import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <>
      <Header />

      <h1 className="text-xl sm:text-2xl font-bold text-center p-3">
        Admin Panel
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 w-full">
        <div className="w-full lg:w-1/2">
          <CreateTask />
        </div>

        <div className="w-full lg:w-1/2">
          <AllTask />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
