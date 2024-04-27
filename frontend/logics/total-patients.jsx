'use client'
import React, { useState, useEffect } from 'react';

export const TotalAppointments = () => {
  const [totalAppointments, setTotalAppointments] = useState(0);

  useEffect(() => {
    const fetchTotalAppointments = async () => {
      try {
        const response = await fetch('/api/appointments/http://192.168.0.100:8000/api/#/totalappointment/totalappointment_retrieve');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTotalAppointments(data.total);
      } catch (error) {
        console.error('Failed to fetch total appointments:', error);
      }
    };

    fetchTotalAppointments();
  }, []);

  return (
    <div className='text-red-500 font-extrabold text-lg'>
      {totalAppointments}
    </div>
  );
};




export const TotalAppointmentsDisplay = ({ total }) => {
  return (
    <div className='text-red-500 font-extrabold text-lg'>
      {total}
    </div>
  );
};



