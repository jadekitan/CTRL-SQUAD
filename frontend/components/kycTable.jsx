import React from 'react'

const KycTable = () => {
  return (
    <div className="container max-w-[43em]  rounded-lg pr-12 ">
    <table className="table w-full text-sm text-left table-striped">
      <thead className="text-xs text-gray-700  border-b bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-3 border-l">
              S/N
            </th>
            <th scope="col" className="px-6 py-3">
              Staff
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              BVN
            </th>
            </tr>
          </thead>
          <tbody>
          
          <tr  className="border-b bg-white">
              <td className="px-6 py-4 border-r border-l">1</td>
              <td className="px-6 py-4 border-r">John Bushmill</td>
              <td className="px-6 py-4 border-r">
                 <div className='bg-[#EBFAE5] flex justify-center p-1 rounded-lg'>
                    <p className='text-[#44AC21]'>available</p>
                </div>
              </td>
              <td className="px-6 py-4 border-r">12345678901</td>
            </tr>

            <tr  className="border-b bg-white">
              <td className="px-6 py-4 border-r border-l">2</td>
              <td className="px-6 py-4 border-r">John Bushmill</td>
              <td className="px-6 py-4 border-r">
                 <div className='bg-[#faeee5] flex justify-center p-1 rounded-lg'>
                    <p className='text-[#fae8e5]'>unavailable</p>
                </div>
              </td>
              <td className="px-6 py-4 border-r">12345678901</td>
            </tr>

            <tr  className="border-b bg-white">
              <td className="px-6 py-4 border-r border-l">3</td>
              <td className="px-6 py-4 border-r">John Bushmill</td>
              <td className="px-6 py-4 border-r">
                 <div className='bg-[#EBFAE5] flex justify-center p-1 rounded-lg'>
                    <p className='text-[#44AC21]'>Verified</p>
                </div>
              </td>
              <td className="px-6 py-4 border-r">12345678901</td>
            </tr>

            <tr  className="border-b bg-white">
              <td className="px-6 py-4 border-r border-l">4</td>
              <td className="px-6 py-4 border-r">John Bushmill</td>
              <td className="px-6 py-4 border-r">
                 <div className='bg-[#EBFAE5] flex justify-center p-1 rounded-lg'>
                    <p className='text-[#44AC21]'>Verified</p>
                </div>
              </td>
              <td className="px-6 py-4 border-r">12345678901</td>
            </tr>

            <tr  className="border-b bg-white">
              <td className="px-6 py-4 border-r border-l">5</td>
              <td className="px-6 py-4 border-r">John Bushmill</td>
              <td className="px-6 py-4 border-r">
                 <div className='bg-[#EBFAE5] flex justify-center p-1 rounded-lg'>
                    <p className='text-[#44AC21]'>Verified</p>
                </div>
              </td>
              <td className="px-6 py-4 border-r">12345678901</td>
            </tr>

            <tr  className="border-b bg-white">
              <td className="px-6 py-4 border-r border-l">6</td>
              <td className="px-6 py-4 border-r">John Bushmill</td>
              <td className="px-6 py-4 border-r">
                 <div className='bg-[#EBFAE5] flex justify-center p-1 rounded-lg'>
                    <p className='text-[#44AC21]'>Verified</p>
                </div>
              </td>
              <td className="px-6 py-4 border-r">12345678901</td>
            </tr>

            <tr  className="border-b bg-white">
              <td className="px-6 py-4 border-r border-l">7</td>
              <td className="px-6 py-4 border-r">John Bushmill</td>
              <td className="px-6 py-4 border-r">
                 <div className='bg-[#EBFAE5] flex justify-center p-1 rounded-lg'>
                    <p className='text-[#44AC21]'>Verified</p>
                </div>
              </td>
              <td className="px-6 py-4 border-r">12345678901</td>
            </tr>
  
          </tbody>
        </table>

        <div className="flex items-center justify-between p-4 mt-4 mb-8 bg-white pt-4">
        <div className="text-sm font-normal text-gray-500">
          Showing 1-7 from 100
        </div>
        <div className="flex gap-2 ">
           <button className="px-2 py-2 rounded-md hover:bg-black hover:text-white bg-white border border-gray-300">
           ◀
          </button>
          <button className="px-2 py-2 rounded-md hover:bg-black hover:text-white bg-white border border-gray-300">
            2
          </button>
          <button className="px-2 py-2 rounded-md hover:bg-black hover:text-white bg-white border border-gray-300">
            3
          </button>
          <button className="px-2 py-2 rounded-md hover:bg-black hover:text-white bg-white border border-gray-300">
            4
          </button>
          <button className="px-2 py-2 rounded-md hover:bg-black hover:text-white bg-white border border-gray-300">
            5
          </button>
          <button className="px-2 py-2 rounded-md hover:bg-black hover:text-white bg-white border border-gray-300">
            ...
          </button>
          <button className="px-2 py-2 rounded-md hover:bg-black hover:text-white bg-white border border-gray-300">
            ▶
          </button>
        </div>
      </div>
      </div>
      );
    }
      


export default KycTable