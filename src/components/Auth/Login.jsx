import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import LoginSuggestion from "../other/LoginSuggestion";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">

      {/* Top Left Suggestion */}
      <div className="absolute top-5 left-5">
        <LoginSuggestion />
      </div>

      {/* Center Login Form */}
      <div className="border-2 border-gray-600 rounded-4xl">
        <form
          className="flex flex-col justify-center items-center gap-8 p-20"
          onSubmit={submitHandler}
        >
          <h1 className="font-semibold text-2xl">Login</h1>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="e.g. user@example.com"
              className="border-2 w-64 p-3 rounded-xl outline-none border-gray-500"
            />

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border-2 w-64 p-3 rounded-xl outline-none border-gray-500"
            />
          </div>

          <button className="bg-blue-700 hover:bg-blue-800 transition-all text-white p-2 rounded-xl w-64 flex items-center justify-center gap-2">
            <BiLogIn className="text-xl" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;