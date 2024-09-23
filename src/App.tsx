import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React, { useEffect, useState } from "react";

import { AUTH_KEY } from "./utils/constants/Storage.Constants";
import About from "./pages/about";
import Course from "./pages/courses";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/navbar/navbar";
import Register from "./pages/register";
import Support from "./pages/support";
import User from "./pages/user";
import VirtualLibrary from "./pages/virtuallibrary";

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loginInfo = localStorage.getItem(AUTH_KEY);
      setAuthenticated(!!loginInfo);
    };
    checkLoginStatus();
    window.addEventListener("sessionUpdated", checkLoginStatus);
    return () => {
      window.removeEventListener("sessionUpdated", checkLoginStatus);
    };
  }, []);

  const routes = createRoutesFromElements(
    <>
      <Route
        path="/"
        element={authenticated ? <Navigate to="/user" replace /> : <Home />}
      />
      <Route
        path="login"
        element={authenticated ? <Navigate to="/user" replace /> : <Login />}
      />
      <Route
        path="register"
        element={authenticated ? <Navigate to="/user" replace /> : <Register />}
      />
      <Route
        path="about"
        element={authenticated ? <Navigate to="/user" replace /> : <About />}
      />
      <Route
        path="user"
        element={!authenticated ? <Navigate to="/" replace /> : <User />}
      />
      <Route path="course" element={<Course />} />
      <Route path="support" element={<Support />} />
      <Route path="virtuallibrary" element={<VirtualLibrary />} />
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </>
  );

  const router = createBrowserRouter(routes);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
