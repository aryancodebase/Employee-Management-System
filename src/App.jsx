import { useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { users } from "./utils/localStorage";
const App = () => {
  const { user, setUser } = useContext(AuthContext);
  const handleLogin = (email, password) => {
    const allUsers = JSON.parse(localStorage.getItem("users")) || users;

    const loggedUser = allUsers.find(
      (u) => u.email === email && u.password === password,
    );

    if (loggedUser) {
      setUser(loggedUser);
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");

    if (!storedUsers) {
      localStorage.setItem("users", JSON.stringify(users));
    }

    const storedUser = localStorage.getItem("loggedUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = user.tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task,
    );

    const updatedUser = { ...user, tasks: updatedTasks };

    setUser(updatedUser);
    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));

    const allUsers = JSON.parse(localStorage.getItem("users"));

    const updatedUsers = allUsers.map((u) =>
      u.id === updatedUser.id ? updatedUser : u,
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  return (
    <>
      {user?.role === "admin" ? (
        <AdminDashboard />
      ) : user?.role === "employee" ? (
        <EmployeeDashboard updateTaskStatus={updateTaskStatus} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
