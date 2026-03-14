import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { setUser, user } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 border-b-2 border-gray-900">
      <h1 className="text-sm sm:text-base">
        Hello{" "}
        <span className="font-semibold text-lg sm:text-xl">
          {user?.name || "User"} 👋
        </span>
      </h1>

      <button
        className="bg-red-500 text-white text-sm px-4 py-2 rounded-xl"
        onClick={logout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;