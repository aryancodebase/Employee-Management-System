import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
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
              className="border-2 w-64 p-3 mb-2 rounded-xl outline-none border-gray-500"
            />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border-2 w-64 p-3 mb-2 rounded-xl outline-none border-gray-500 "
            />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-xl w-64">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
