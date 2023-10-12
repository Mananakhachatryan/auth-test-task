import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import AuthProvider from "./context/authContext";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import DashboardContainer from "./containers/DashboardContainer";
import { AuthContext, getStorageContext } from "./context/authContext";
import { AuthContextType } from "./context/auth";

const PrivateRoute = () => {
  const context = React.useContext(AuthContext) as AuthContextType;
  const storageContext = getStorageContext();
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return !!context?.session || !!storageContext?.session ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
