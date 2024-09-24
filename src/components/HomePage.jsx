import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NewStudent from './NewStudent';
import UpdateDelete from './Update_Delete';

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



    const closeModal = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col min-h-screen p-8 bg-yellow-400">
            <main className="flex-grow flex flex-col md:flex-row items-center justify-around">
                <nav className="flex flex-col space-y-4 mb-8 md:mb-0">
                    <Link to="/NewStudent" className=" px-16 py-8 w-100 bg-blue-900 rounded-lg text-4xl font-serif text-white font-bold text-center">
                        New Student
                    </Link>
                    <Link to="/Update_Delete" className="px-16 py-8 w-100 bg-blue-900 rounded-lg text-4xl font-serif text-white font-bold text-center">
                        Update/Delete
                    </Link>
                    <Link to="/View_log" className='px-16 py-8 w-100 bg-blue-900 rounded-lg text-4xl font-serif text-white font-bold text-center'>
                        View Attendance Log
                    </Link>
                </nav>

                <div className="flex flex-col items-center">
                    <FontAwesomeIcon className="text-3xl mb-4" icon={faCamera} />
                    <button className="text-white bg-blue-900 rounded-lg p-2">Launch Camera</button>
                </div>
            </main>

            {/* NewStudent Modal */}
            {showNewStudentModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <NewStudent />
                        <button
                            onClick={closeModal}
                            className="mt-4 bg-red-600 text-white p-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Update/Delete Modal */}
            {showUpdateDeleteModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <UpdateDelete />
                        <button
                            onClick={closeModal}
                            className="w-full mt-4 bg-red-600 text-white p-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
