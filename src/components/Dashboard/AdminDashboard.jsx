import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <h1 className="text-2xl font-bold mb-4 text-center p-2">Admin Panel</h1>
      <div className="flex gap-6 p-6 w-full">
        <div className="w-1/2">
          <CreateTask />
        </div>
        <div className="w-1/2">
          <AllTask />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
