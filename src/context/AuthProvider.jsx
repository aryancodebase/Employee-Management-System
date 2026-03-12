import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // it will collect admin form data for task distribution
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    assignedTo: "",
    category: "",
  });

  return (
    <AuthContext.Provider value={{ user, setUser, formData, setFormData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
