import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "@/App.tsx";
import DashboardRoute from "@/DashbaordRoutes";
import { ReduxProvider } from "@/providers/ReduxProvider";
import "@/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <ReduxProvider>
      <DashboardRoute />
      <App />
      <Toaster position="top-right" />
    </ReduxProvider>
  </Router>
);
