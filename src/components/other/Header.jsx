import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { setUser, user } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };
  return (
    <div className="flex items-center justify-between p-4 border-b-2 border-gray-900">
      <h1>
        Hello{" "}
        <span className="font-semibold text-xl">{user?.name || "User"} 👋</span>
      </h1>
      <button
        className="bg-red-500 text-white text-sm p-3 rounded-xl"
        onClick={logout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
