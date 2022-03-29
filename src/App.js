import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { UserProvider } from "./UserContext";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div id="wrapper">
      <UserProvider value={{ users, setUsers }}>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Outlet />
          </div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
