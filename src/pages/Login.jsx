import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    username === storedUser.email &&
    password === storedUser.password
  ) {
    navigate("/dashboard");
  } else {
    alert("Invalid username or password");
  }
};
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-3xl border border-white/30 shadow-2xl rounded-2xl p-10 w-full max-w-sm">
<div className="text-center mb-6">
<img src={logo} alt="Logo" className="w-16 mx-auto mb-3" />
<h2 className="text-2xl font-bold text-white">Admin Login
 </h2>
        </div>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 mb-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-6 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
        />

        {/* Login Button */}
        <button className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition shadow-lg">
          Login
        </button>

        {/* Register Link */}
        <p className="text-center mt-4 text-white/90">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-300 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Login;