import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import logo from "../assets/logo.png";
import bs from "../assets/bs.png";
import excel from "../assets/excel.png";
import avg from "../assets/avg.png";
import dashboard from "../assets/dashboard.png";
import bg from "../assets/bg.png";
import add from '../assets/add.gif';
import totals from '../assets/totals.gif'

function Dashboard({ students }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const totalStudents = students.length;
  const averageAge =
    totalStudents > 0
      ? Math.round(
        students.reduce((sum, s) => sum + Number(s.age), 0) / totalStudents
      )
      : 0;

  const recentStudents = [...students].slice(-5).reverse();
  const downloadExcel = () => {
    if (students.length === 0) {
      alert("No students to export!");
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream"
    });

    saveAs(data, "students.xlsx");

  };

  return (
<div className="flex min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <aside
        className={`bg-blue-700 text-white flex flex-col transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"
          }`}>
        <div className="flex items-center justify-between p-6 border-b border-blue-500"> {sidebarOpen && (
          <div className="flex flex-col items-center w-full">
            <img src={logo} alt="logo" className="w-14 h-14 mb-2" />
            <h1 className="text-xl font-bold">Student</h1></div>
        )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} >
            <img src={bs} alt="menu" className="w-6 h-6" /></button>
        </div>
        <nav className="flex-1 p-6 flex flex-col gap-5 text-lg">
          <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600">
            <img src={dashboard} alt="dashboard" className="w-6 h-6" />
            {sidebarOpen && "Dashboard"}</Link>
          <Link to="/add-student" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600">
            <img
              src={add} alt="add" className="w-6 h-6" />
            {sidebarOpen && "Add Student"}</Link>
          <Link to="/students" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600" >
            <img src={totals} alt="students" className="w-6 h-6" />
            {sidebarOpen && "Students List"}</Link>
        </nav> </aside>

      <main className="flex-1 p-10 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
          <button onClick={downloadExcel}
            className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-700">
            <img
              src={excel} alt="excel" className="w-6 h-6" /> Export Excel</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
            <img
              src={totals}
              alt="students"
              className="w-10 h-10" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Total Students</h2>
              <p className="text-3xl font-bold text-gray-800">{totalStudents}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
            <img
              src={avg}
              alt="average"
              className="w-10 h-10"/>
 <div>
<h2 className="text-lg font-semibold text-gray-700"> Average Age</h2>
 <p className="text-3xl font-bold text-gray-800">{averageAge}</p>
 </div>
</div>
<Link to="/add-student" className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-xl">
<img src={add} alt="add" className="w-10 h-10"/>
<div>
<h2 className="text-lg font-semibold text-gray-700">Add Student</h2>
<p className="text-gray-500 text-sm">Register new student</p>
</div>
</Link>
</div>
<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-2xl font-semibold mb-4"> Recent Students</h2>
{recentStudents.length === 0 ? (
<p>No students added yet.</p>
) : (
 <table className="min-w-full">
  <thead>
<tr className="bg-gray-200">
<th className="py-2 px-4 text-left">Name</th>
<th className="py-2 px-4 text-left">Email</th>
<th className="py-2 px-4 text-left">Age </th>
</tr></thead>
<tbody>
{recentStudents.map((student) => (
<tr key={student.id} className="border-b hover:bg-gray-100">
<td className="py-2 px-4">{student.name}</td>
<td className="py-2 px-4">{student.email}</td>
<td className="py-2 px-4">{student.age}</td></tr>
))}
</tbody>
</table>
 )}
</div>
</main>
</div>
);}
export default Dashboard;