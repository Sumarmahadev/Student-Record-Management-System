import React from "react";
import { Link } from "react-router-dom";
import logout from "../assets/logout.gif"; 
function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-8 items-center">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/add-student">Add Student</Link>
      <Link to="/students">Students</Link>
       <div className="ml-auto flex items-center gap-2">
        <Link to="/logout" className="flex items-center gap-2">
<img src={logout} alt="Logout" className="w-5 h-5" /> Logout</Link> </div>
    </nav>
  );
}

export default Navbar;