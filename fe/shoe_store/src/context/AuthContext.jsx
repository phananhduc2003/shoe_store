import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ApiListUsers } from "../apiService/ApiListUsers";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // Lưu role của user
  const [listUsers, setListUsers] = useState([]);
  const [idUser, setIdUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Đánh dấu bắt đầu tải dữ liệu
    ApiListUsers()
      .then((response) => {
        setListUsers(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      })
      .finally(() => {
        setLoading(false); // Dữ liệu đã tải xong
      });
  }, []);

  const Login = (username, password) => {
    if (loading) {
      console.log("Still loading user data...");
      return null; // Chặn đăng nhập nếu chưa tải xong
    }

    const user = listUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setAuthenticated(true);
      setUserRole(user.role);
      setIdUser(user.id);
      return user.role;
    } else {
      setAuthenticated(false);
      setUserRole(null);
      setIdUser(null);
      return null;
    }
  };

  const Logout = () => {
    setAuthenticated(false);
    setUserRole(null);
    setIdUser(null);
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
