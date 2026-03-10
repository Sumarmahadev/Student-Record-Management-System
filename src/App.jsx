import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import StudentsList from "./pages/StudentsList";
import Dashboard from "./pages/Dashborad";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./logout";

function App() {

  const location = useLocation();

  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    const newStudent = { ...student, id: Date.now() };
    setStudents([...students, newStudent]);
  };
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };
  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((s) =>
        s.id === updatedStudent.id ? updatedStudent : s
      )
    );
    setEditingStudent(null);
  };

  return (
    <div>
      {location.pathname !== "/" && location.pathname !== "/login" &&  location.pathname !== "/register" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<  Register   />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route  path="/dashboard" element={<Dashboard students={students} />}/>
        <Route path="/add-student" element={<AddStudent
      addStudent={addStudent}
      updateStudent={updateStudent}
      editingStudent={editingStudent}
    />
  }
/>
<Route path="/students" element={ <StudentsList students={students} setEditingStudent={setEditingStudent}
 deleteStudent={deleteStudent}/>} /> </Routes></div>);}



 export default App;