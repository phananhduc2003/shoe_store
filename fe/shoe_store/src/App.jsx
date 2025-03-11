import { Fragment } from "react"; // Component dùng để chứa
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import { defaultRoutes } from "./routes";
import { adminRoutes } from "./routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import AuthProvider, { useAuth } from "./context/AuthContext";
import { AnimatePresence, motion } from "framer-motion"; // Import animation

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

// Animation cho chuyển trang
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
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
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AnimatedRoutes />
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
