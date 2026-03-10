
import React from "react";
import StudentTable from "../components/StudentTable";
import bg from "../assets/bg.png"; 

function StudentsList({ students, setEditingStudent, deleteStudent }) {
  return (
    <div className="relative min-h-screen p-10 flex flex-col items-center justify-start">
  
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative z-10 w-full max-w-5xl mb-8 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-2xl p-6 shadow-lg">
        <p className="text-4xl font-bold text-white text-center">
          Students List
        </p>
      </div>

      <div className="relative z-10 w-full max-w-5xl bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl p-6 shadow-lg">
        <StudentTable
          students={students}
          setEditingStudent={setEditingStudent}
          deleteStudent={deleteStudent}
        />
      </div>
    </div>
  );
}

export default StudentsList;