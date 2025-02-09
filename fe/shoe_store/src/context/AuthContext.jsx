import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ApiListUsers } from "../apiService/ApiListUsers";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // Lưu role của user
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => FindAllUsers(), []);

  const FindAllUsers = () => {
    ApiListUsers()
      .then((response) => {
        setListUsers(response.data);
      })
      .catch((error) => {
        console.log("fair call api " + error);
      });
  };

  const Login = (username, password) => {
    const user = listUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setAuthenticated(true);
      setUserRole(user.role);
      return user.role;
    } else {
      setAuthenticated(false);
      setUserRole(null);
      return null;
    }
  };

  const Logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, Login, Logout, userRole }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
