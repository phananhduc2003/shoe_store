import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const Login = (username, password) => {
    if (username === "duc" && password === "123") {
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      return false;
    }
  };

  const Logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
