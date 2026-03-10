import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user");
    navigate("/login");
  }, [navigate]);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold"> Logging out... </h1>
    </div>
  );
}
export default Logout;