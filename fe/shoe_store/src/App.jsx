import { Fragment } from "react"; //component dùng để chứa.

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { defaultRoutes } from "./routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import AuthProvider, { useAuth } from "./context/AuthContext";

const AuthenticatedRoute = ({ children }) => {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {defaultRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
AuthenticatedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
