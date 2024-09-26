import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NewStudent from './NewStudent';
import UpdateDelete from './Update_Delete';
import { NotificationManager } from 'react-notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';


export default function HomePage() {
    const [showNewStudentModal, setShowNewStudentModal] = useState(false);
    const [showUpdateDeleteModal, setShowUpdateDeleteModal] = useState(false);
    
    

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/NewStudent") {
            setShowNewStudentModal(true);
        } else if (location.pathname === "/Update_Delete") {
            setShowUpdateDeleteModal(true);
        } else {
            setShowNewStudentModal(false);
            setShowUpdateDeleteModal(false);
        }
    }, [location]);

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

   

    const closeModal = () => {
        navigate('/');
    };

    return (

        <div className="flex flex-col min-h-screen p-8 bg-yellow-400">
            <main className="flex-grow flex flex-col md:flex-row items-center justify-around">
                <nav className="flex flex-col space-y-4 mb-8 md:mb-0">
                    <Link to="/NewStudent" className=" px-16 py-8 w-100 bg-blue-900 rounded-lg text-4xl text-white font-bold font-serif text-center">
                        New Student
                    </Link>
                    <Link to="/Update_Delete" className="px-16 py-8 w-100 bg-blue-900 rounded-lg text-4xl text-white font-bold font-serif text-center">
                        Update/Delete
                    </Link>
                    <Link to="/View_log" className='px-16 py-8 w-100 bg-blue-900 rounded-lg text-4xl text-white font-bold font-serif text-center'>
                        View Attendance Log
                    </Link>
                </nav>
                <div className='flex flex-col' onClick={launchCamera}>
                    <button><FontAwesomeIcon icon={faCamera} className='m-4 text-5xl md:w-66 md:h-42'/></button> 
                    <button className='bg-blue-900 text-white font-bold font-serif text-4xl px-12 py-6 rounded-lg'>Launch Camera</button>
                    
                </div>
               

            </main>

            {showNewStudentModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <NewStudent/>
                        <button
                            onClick={closeModal}>
                        </button>
                    </div>
                </div>
            )}

        
            {showUpdateDeleteModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <UpdateDelete />
                        <button onClick={closeModal} className="w-full mt-4 bg-red-600 text-white p-2 rounded">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}