'use client'
import React from 'react'
import { useState } from 'react';
const KycDetails = () => {

    const [activeTab, setActiveTab] = useState('information');
    const handleClick = (tab) => {
        setActiveTab(tab);
    };

  return (
    <div className="">
      <div className="tabs flex justify-center">
        <button
          className={`tab px-4 py-2 mr-2 text-base font-medium  ${
            activeTab === 'information' ? 'border-b-2 text-red-600 border-red-500' : 'border-b-2 text-gray-400 border-gray-400'
          }`}
          onClick={() => handleClick('information')}
        >
          Information
        </button>
        <button
          className={`tab px-4 py-2 mr-2  text-base font-medium  ${
            activeTab === 'document' ? 'border-b-2 text-red-600 border-red-500' : 'border-b-2 text-gray-400 border-gray-400'
          }`}
          onClick={() => handleClick('document')}
        >
          Document
        </button>
      </div>
      <div className="content mt-4">
        {activeTab === 'information' && (
          <div className="">
            <div className='flex ml-44'>
                <img src="/kyc-photo.svg" alt="photo" />
            </div>
            <div className='flex  ml-12 justify-between gap-44 mt-8'>
                <div className='flex flex-col gap-4'>
                    <p className='text-gray-500 font-bold text-lg'>First Name</p>
                    <p className='text-gray-800 font-bold text-lg'>John Bushmill</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-gray-500 font-bold text-lg'>Contact Number</p>
                    <p className='text-gray-800 font-bold text-lg'>070123456789</p>
                </div>
            </div>

            <div className='flex  ml-12 justify-between gap-44 mt-8'>
                <div className='flex flex-col gap-4'>
                    <p className='text-gray-500 font-bold text-lg'>NIN</p>
                    <p className='text-gray-800 font-bold text-lg'>191619921189</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-gray-500 font-bold text-lg'>BVN</p>
                    <p className='text-gray-800 font-bold text-lg'>123456789011</p>
                </div>
            </div>

            <div className='flex justify-end items-end mt-12'>
            <button className="bg-red-600 text-white  py-3 px-12 rounded">
                 Next
            </button>
            </div>

            </div>


        )}
        {activeTab === 'document' && (
          <div className="">
            <div className='flex justify-center items-center mt-24'>
                <img src="/nin.svg" alt="photo" />
            </div>

            <div className='flex justify-end gap-4 items-end mt-24'>
            <button className="bg-[#F9956B] text-white  py-3 px-12 rounded">
                 Decline
            </button>

            <button className="bg-red-600 text-white  py-3 px-12 rounded">
                 Next
            </button>
            </div>    
          </div>
        )}
      </div>
    </div>
  )
}

export default KycDetails