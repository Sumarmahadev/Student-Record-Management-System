import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";
import loadingGif from "../assets/loading.gif";

function StudentTable({ students = [], setEditingStudent, deleteStudent }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 text-xl">
        <img src={loadingGif} alt="Loading..." className="w-16 h-16 mb-4" />
        <p>Loading students...</p>
      </div>
    );
  }

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(data, "students.xlsx");
  };
   if (students.length === 0) {
  alert("No students to export");
  return;
}
  return (
    <div className="max-w-5xl mx-auto">
      <button
        onClick={downloadExcel}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Download Excel
      </button>

      <table className="min-w-full bg-white shadow-md rounded">
        <thead className="bg-[#333333] text-white">
          <tr>
            <th className="py-3">Name</th>
            <th className="py-3">Email</th>
            <th className="py-3">Age</th>
            <th className="py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4" className="py-5 text-center">
                No students found
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr
                key={student.id}
                className="text-center border-b hover:bg-gray-100"
              >
                <td className="py-3">{student.name}</td>
                <td className="py-3">{student.email}</td>
                <td className="py-3">{student.age}</td>

                <td className="py-3">
                  <button
                    onClick={() => {
                      setEditingStudent(student);
                      navigate("/add-student"); // go to form
                    }}
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2 cursor-pointer"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this student?"
                        )
                      ) {
                        deleteStudent(student.id);
                      }
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;