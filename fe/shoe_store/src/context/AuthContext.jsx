import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ApiLogin } from "../apiService/ApiLogin";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // Lưu role của user
  const [idUser, setIdUser] = useState();
  const [loading, setLoading] = useState(true);

  // Tự động check sessionStorage để đăng nhập lại nếu còn token
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));

        const role = payload.role === "ADMIN" ? 1 : 0;

        setAuthenticated(true);
        setUserRole(role);
        setIdUser(payload.userId);
      } catch (e) {
        console.error("Invalid token:", e);
        sessionStorage.removeItem("token");
      }
    }
    setLoading(false);
  }, []);

  const Login = async (username, password) => {
    try {
      const response = await ApiLogin(username, password);
      const token = response.data.token;

      const payload = JSON.parse(atob(token.split(".")[1]));

      const role = payload.role === "ADMIN" ? 1 : 0;

      sessionStorage.setItem("token", token);
      setAuthenticated(true);
      setUserRole(role);
      setIdUser(payload.userId); // sub là username hoặc id tùy backend

      return role;
    } catch (error) {
      console.error("Login failed:", error);
      return null;
    }
  };

  const Logout = () => {
    setAuthenticated(false);
    setUserRole(null);
    setIdUser(null);
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, Login, Logout, userRole, idUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
