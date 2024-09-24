// NewStudent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

export default function NewStudent() {
    const [student, setStudent] = useState({
        name: '',
        scholarNo: '',
        semester: '',
        course: ''
    });
    const navigate = useNavigate();

    const handleInput = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(student).some(value => value === '')) {
            NotificationManager.error('Please fill all fields', 'Error', 3000);
            return;
        }
        console.log(student);
        NotificationManager.success('Student added successfully', 'Success', 3000);
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl mb-6 text-center">New Student</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={student.name}
                        onChange={handleInput}
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Scholar No."
                        value={student.scholarNo}
                        onChange={handleInput}
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Semester"
                        value={student.semester}
                        onChange={handleInput}
                        className="w-full p-2 mb-4 border rounded"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Course"
                        value={student.course}
                        onChange={handleInput}
                        className="w-full p-2 mb-4 border rounded"
                    />
                    {/* other input fields here */}
                    <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded mb-2">
                        Submit
                    </button>
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-full bg-red-600 text-white p-2 rounded"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}
