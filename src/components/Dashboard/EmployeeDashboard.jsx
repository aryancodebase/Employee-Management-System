import Header from "../other/Header"
import TaskListNumber from "../other/TaskListNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = () => {
  return (
    <div className="h-screen">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
