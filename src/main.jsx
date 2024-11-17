import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import SignUpPage from "./pages/SignUpPage.jsx";
import DesignSkeleton from "./components/DashboardComponents/DesignSkeleton.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index Component={App} />

      <Route path="signup" Component={SignUpPage} />

      <Route path="dashboard" Component={DesignSkeleton}>
        <Route index Component={DashboardPage} />
      </Route>

      <Route
        path="/profile"
        element={<Navigate to="/dashboard/profile" replace />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
