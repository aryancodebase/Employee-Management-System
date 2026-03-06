import { useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { users } from "./utils/localStorage";
const App = () => {
  const { user, setUser } = useContext(AuthContext);
  const handleLogin = (email, password) => {
    const loggedUser = users.find(
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
    const storedUser = localStorage.getItem("loggedUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  });
  return (
    <>
      {user?.role === "admin" ? (
        <AdminDashboard />
      ) : user?.role === "employee" ? (
        <EmployeeDashboard />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
