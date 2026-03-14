import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ updateTaskStatus }) => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <TaskListNumber />
      <TaskList updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default EmployeeDashboard;
