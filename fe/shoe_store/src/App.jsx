import { Fragment } from "react"; //component dùng để chứa.

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { defaultRoutes } from "./routes";
import { adminRoutes } from "./routes";

import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import AuthProvider, { useAuth } from "./context/AuthContext";

// Chặn truy cập nếu chưa đăng nhập
const AuthenticatedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Chặn truy cập admin nếu không phải admin
const AdminRoute = ({ children }) => {
  const { isAuthenticated, userRole } = useAuth();
  return isAuthenticated && userRole === 1 ? children : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes bình thường */}
          {defaultRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = route.layout || DefaultLayout;
            if (route.layout === null) Layout = Fragment;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {route.protected ? (
                      <AuthenticatedRoute>
                        <Page />
                      </AuthenticatedRoute>
                    ) : (
                      <Page />
                    )}
                  </Layout>
                }
              />
            );
          })}

          {/* Routes dành cho Admin */}
          {adminRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = route.layout || DefaultLayout;
            if (route.layout === null) Layout = Fragment;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <AdminRoute>
                      <Page />
                    </AdminRoute>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
AuthenticatedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default App;
