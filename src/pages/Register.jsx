import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! Please login.");
    navigate("/login");
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white/10 backdrop-blur-3xl border border-white/30 shadow-2xl rounded-2xl p-10 w-full max-w-sm">
      <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="w-16 mx-auto mb-2"/>
          <h2 className="text-2xl font-bold text-white">Create Account</h2>
        </div>
 <form onSubmit={handleRegister} className="space-y-4">
 <input
type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)}
 className="w-full px-4 py-2 rounded-lg border border-gray-300"/>
<input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}
 className="w-full px-4 py-2 rounded-lg border border-gray-300"/>
<input
type="password"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300" />
<button className="w-full py-2 bg-emerald-600 text-white rounded-lg"> Register</button>
</form>
 <p className="text-center text-white mt-4">Already have an account?{" "}
<Link to="/login" className="text-yellow-300">Login</Link></p> </div></div>);
}
export default Register;