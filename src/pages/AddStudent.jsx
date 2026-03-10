import React from "react";
import StudentForm from "../components/StudentForm";
import bg from "../assets/bg.png";

function AddStudent({ addStudent, editingStudent, updateStudent }) {
  return (
    <div className="relative min-h-screen p-10 flex flex-col items-center justify-start">
  <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg"
        style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="relative z-10 w-full max-w-3xl mb-8 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center">Add Student </h1>
      </div>
      <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl p-6 shadow-lg">
        <StudentForm addStudent={addStudent}
          editingStudent={editingStudent}
          updateStudent={updateStudent}/>
      </div>
    </div>
  );
}

export default AddStudent;