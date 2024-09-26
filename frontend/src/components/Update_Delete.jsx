import React, { useState } from 'react';

export default function UpdateDelete({ closeModal }) {
  const [student, setStudent] = useState({
    scholarNo: '',
    name: '',
  });

  const handleInput = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.scholarNo === '' || student.name === '') {
      alert('Please fill all fields');
      return;
    }
    console.log(student);
    closeModal(); // Close modal on successful submit
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-4 text-center font-serif font-bold">Update/Delete Student</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          name="scholarNo"
          placeholder="Enter Scholar No"
          value={student.scholarNo}
          onChange={handleInput}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleInput}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded mb-2">
          Submit
        </button>
      
        
      </form>
    </div>
  );
}
