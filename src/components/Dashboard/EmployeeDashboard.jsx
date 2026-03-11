import Header from "../other/Header"
import TaskListNumber from "../other/TaskListNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({updateTaskStatus}) => {
  return (
    <div className="h-screen">
      <Header />
      <TaskListNumber />
      <TaskList updateTaskStatus={updateTaskStatus} />
    </div>
  )
}

export default EmployeeDashboard
