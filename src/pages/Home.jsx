import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3 hover:scale-105 transition">
            <img src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-md shadow"
            />

            <h1 className="text-2xl font-bold text-indigo-600 tracking-wide">
              StudentRecords
            </h1>

          </div>
          <div className="flex items-center gap-5">
 <Link
  to="/login"
  className="px-5 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition duration-300 shadow">
  Admin Login
</Link>     
<Link to="/register" className="px-5 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition duration-300 shadow"> Register
            </Link></div></div>
</header>
      <div
        className="flex flex-grow items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}      >
        <div className="bg-white/40 backdrop-blur-xl shadow-2xl rounded-xl p-10 text-center max-w-lg border border-white/30">
<img src={logo} alt="Logo" className="w-20 mx-auto mb-4"/>
<h1 className="text-3xl font-bold mb-4 text-gray-800">
            Student Record Management</h1>
          <p className="text-gray-700 mb-6">
            Manage student records easily. Admin can add, update,
            delete, and organize student data efficiently.
          </p>
          <Link
            to="/login"
            className="px-7 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 shadow-md">
            Login
          </Link>
</div>
</div>
      <footer className="bg-gray-900 text-white text-center py-4">
        © 2026 Student Record Management System | Admin Panel</footer> </div>
  );
}

export default Home;