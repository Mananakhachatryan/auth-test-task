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
import { AuthContext } from "./context/authContext";
import { getStorageContext } from "./context/authReducer";
import { ISession } from "./context/auth";

const PrivateRoute = ({ session }: { session: ISession | null }) => {
  const storageContext = getStorageContext();
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return !!session || !!storageContext?.session ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

function App() {
  const context = React.useContext(AuthContext);
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route
            path="/"
            element={<PrivateRoute session={context.state.auth.session} />}
          >
            <Route path="/dashboard" element={<DashboardContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
