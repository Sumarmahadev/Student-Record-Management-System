import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentForm({ addStudent, editingStudent, updateStudent }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setEmail(editingStudent.email);
      setAge(editingStudent.age);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !age) {
      alert("All fields are required");
      return;
    }
    if  (age <= 0 || age > 100){
      alert("Age must be at least 1 and below 100");
      return;
    }

    // Email validation here
 const emailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@gmail\.com$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format! don't start with number");
      return;
    }

   const student = { name, email, age };

  if (editingStudent) {
    updateStudent({ ...student, id: editingStudent.id });
  } else {
    addStudent(student);
    setName("");
    setEmail("");
    setAge("");
  }

  navigate("/students");
};


  return (
    <div className="flex justify-center mb-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h2 className="text-xl font-semibold mb-6 text-center">
          {editingStudent ? "Edit Student" : "Add Student"}
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border p-3 mb-6 rounded"
          min="1"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          {editingStudent ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;