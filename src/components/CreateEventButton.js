import React from 'react';
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const CreateEventButton = () => {
  const { setShowEventModal, showSidebar } = useContext(GlobalContext);
  return (
    <>
      <button onClick={() => setShowEventModal(true)} className='border p-2 rounded-full flex items-center shadow-md hover:shadow-xl hover:bg-gray-100'>
        <svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
        <span className={showSidebar ?  'hidden' : 'pl-3 pr-7 font-semibold text-gray-500' }>Create</span>
      </button>
      <svg onClick={() => setShowEventModal(true)} className='fixed bottom-8 right-8 cursor-pointer rounded-full p-2 hover:bg-gray-200' width="40" height="40" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
    </>
  )
};

export default CreateEventButton;