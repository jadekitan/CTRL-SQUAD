'use client'
import { useEffect } from 'react';
import { useState } from 'react';
import { TotalAppointmentsDisplay } from '@/logics/total-patients';
import React from 'react';

const QuickOverview = () => {

const [totalAppointment, setTotalAppointment] = useState(0);

  useEffect(() => {
    // Fetch the total number of appointments from the API
    const fetchTotalAppointments = async () => {
      try {
        const response = await fetch('/api/appointments/total');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTotalAppointment(data.total); // Assuming the API returns an object with a 'total' property
      } catch (error) {
        console.error('Failed to fetch total appointments:', error);
      }
    };

    fetchTotalAppointments();
  }, []);



  return (
    <div>
        <div className='font-extrabold  text-gray-600 text-lg mt-8 mb-2 pl-2 ml-8 '>Quick Overview</div>
        <div className='flex gap-3'>

            <div className='w-[20em] h-[8em] bg-white rounded-lg shadow-lg flex items-center justify-center gap-4'>
                <div className='w-16 h-16 bg-[#FF3A55] rounded-full flex items-center justify-center'>
                     <img src="/dollar-icon.svg" alt="icon" />
                </div>
                <div className='flex flex-col gap-2'> 
                    <div className='text-gray-700 font-medium'>Total Staff</div>
                    <div className='text-red-500 font-extrabold text-lg'>360</div>
                </div>
            </div>

            <div className='w-[20em] h-[8em] bg-white rounded-lg shadow-lg flex items-center justify-center gap-4'>
                <div className='w-16 h-16 bg-[#44AC214D] rounded-full flex items-center justify-center'>
                     <img src="/downchart.svg" alt="icon" />
                </div>
                <div className='flex flex-col gap-2'> 
                    <div className='text-gray-700 font-medium'>Total Doctors</div>
                    <div className='text-[#44AC21] font-extrabold text-lg'>23</div>
                </div>
            </div>

            <div className='w-[20em] h-[8em] bg-white rounded-lg shadow-lg flex items-center justify-center gap-4'>
                <div className='w-16 h-16 bg-[#FF0F004D] rounded-full flex items-center justify-center'>
                     <img src="/upchart.svg" alt="icon" />
                </div>
                <div className='flex flex-col gap-2'> 
                    <div className='text-gray-700 font-medium'>Total Patient</div>
                    <div className='text-red-500 font-extrabold text-lg'> <TotalAppointmentsDisplay total={totalAppointment} /></div>
                </div>
            </div>

            <div className='w-[20em] h-[8em] bg-white rounded-lg shadow-lg flex items-center justify-center gap-4'>
                <div className='w-16 h-16 bg-[#F79E1B4D] rounded-full flex items-center justify-center'>
                     <img src="/avatar-2.svg" alt="icon" />
                </div>
                <div className='flex flex-col gap-2'> 
                    <div className='text-gray-700 font-medium'>Total Revenue</div>
                    <div className='text-[#F79E1B] font-extrabold text-lg'>96</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickOverview;