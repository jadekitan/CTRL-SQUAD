'use client'
import React, { useState } from 'react';
import { RiCheckDoubleFill } from 'react-icons/ri'; 

const MarkAsRead = () => {
  const [isRead, setIsRead] = useState(false); 

  const handleMarkAsRead = async () => {
    setIsRead(true); 
    try {
      const response = await fetch('/api/mark-as-read', {
        method: 'POST',
      });

      if (!response.ok) {
        console.error('Error marking as read:', await response.text());
      }
    } catch (error) {
      console.error('Error marking as read:', error);
      
    }
  };

  return (
    <div className="flex justify-between space-x-2 ml-8">
      <RiCheckDoubleFill className={isRead ? 'w-6 h-6 text-green-600' : 'w-6 h-6 text-green-600'} />
      <a
        href="#" 
        className={`text-green-600 font-semibold cursor-pointer ${isRead ? 'opacity-50' : ''}`}
        onClick={handleMarkAsRead}
       >
        {isRead ? 'Read' : 'Mark as read'}
      </a>
    </div>
  );
};

export default MarkAsRead;