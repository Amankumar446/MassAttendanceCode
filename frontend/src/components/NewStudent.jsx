import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(student).some(value => value === '')) {
            NotificationManager.error('Please fill all fields', 'Error', 3000);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/submit_student', student);
            if (response.status === 201) {
                NotificationManager.success('Student added successfully', 'Success', 3000);
                navigate('/');  // Redirect to another page if needed
            }
        } catch (error) {
            NotificationManager.error('Error submitting student details', 'Error', 3000);
            console.error(error);
        }
    };

    const launchCamera = async () => {
        try {
            const response = await axios.get('http://localhost:5000/start_camera');
            if (response.status === 200) {
                NotificationManager.success('Video recording saved', 'Success', 3000);
            }
        } catch (error) {
            NotificationManager.error('Error starting camera', 'Error', 3000);
            console.error(error);
        }
    };

    return (
      

        <div className="flex flex-col w-auto">
            <div className="flex justify-end">
                    <button onClick={() => navigate(-1)} className="text-left font-bold font-serif bg-red-600 text-white p-2 rounded">X</button>
                </div> 
            <h2 className="text-2xl mb-4 text-center font-serif font-bold">New Student</h2>
            <form onSubmit={handleInput} className="w-full">
         
            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={student.name}
                onChange={handleInput}
                className="w-full p-4 mb-4 border border-gray-300 rounded"
                />
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
                name="scholarNo"
                placeholder="Enter Semester"
                value={student.semester}
                onChange={handleInput}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                   <input
                type="text"
                name="scholarNo"
                placeholder="Enter Course"
                value={student.course}
                onChange={handleInput}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
            <button type="button" onClick={launchCamera} className=" w-fit m-2 text-xl bg-green-800 text-white px-4 py-2 rounded mt-4">Launch Camera</button>
            <button type="submit" className="w-fit bg-blue-900 text-white text-xl m-2 p-2 rounded mb-2">Submit</button>
      </form>
    </div>
    );
}
