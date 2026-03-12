
const LoginSuggestion = () => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-3 shadow-lg">
      <select
        className="bg-gray-900 text-gray-200 text-sm outline-none cursor-pointer"
        defaultValue=""
      >
        <option>Login Details</option>

        <option disabled className="text-gray-400">
          -- Admin Login --
        </option>
        <option>admin@me.com :: 123</option>

        <option disabled className="text-gray-400">
          -- Employee Login --
        </option>
        <option>employee1@me.com :: 123</option>
        <option>employee2@me.com :: 123</option>
        <option>employee3@me.com :: 123</option>
        <option>employee4@me.com :: 123</option>
        <option>employee5@me.com :: 123</option>
        <option>employee6@me.com :: 123</option>
        <option>employee7@me.com :: 123</option>
        <option>employee8@me.com :: 123</option>
      </select>
    </div>
  );
};

export default LoginSuggestion;
