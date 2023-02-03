import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, App } from "./components";
import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/mp-connect" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </BrowserRouter>
);
