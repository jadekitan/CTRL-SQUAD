import React from 'react';

const Table = () => {
  return (
    <div className="container mx-auto rounded overflow-x-auto shadow">
      <div className="w-full flex items-center justify-between py-4">
        <div className="text-xl text-gray-600 font-bold">Recent Patients</div>
        <div className="flex items-center">
          <div className="mr-4 text-gray-600">Search for items.</div>
          <input
            className="rounded border border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>

      <table className="w-full text-left table-auto border-collapse">
        <thead>
          <tr className="bg-sky-100 text-gray-600 text-sm font-medium">
            <th className="px-4 py-2">ERRAND ID</th>
            <th className="px-4 py-2">USER</th>
            <th className="px-4 py-2">LOCATION</th>
            <th className="px-4 py-2">ERRAND DETAILS</th>
            <th className="px-4 py-2">ERRAND TYPE</th>
            <th className="px-4 py-2">ERRAND STATUS</th>
            <th className="px-4 py-2">TIME</th>
            <th className="px-4 py-2">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-100">
            <td className="px-4 py-2">#290888890</td>
            <td className="px-4 py-2">Faith Chima</td>
            <td className="px-4 py-2">295 Herbert Macualay Way, yaba, Lagos</td>
            <td className="px-4 py-2">I need a runner that can do a quick laundry pickup</td>
            <td className="px-4 py-2">Pickup</td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">2 hours ago</td>
            <td className="px-4 py-2"></td>
          </tr>

          <tr className="border-b hover:bg-gray-100">
            <td className="px-4 py-2">#290888890</td>
            <td className="px-4 py-2">Faith Chima</td>
            <td className="px-4 py-2">295 Herbert Macualay Way, yaba, Lagos</td>
            <td className="px-4 py-2">I need a runner that can do a quick laundry pickup</td>
            <td className="px-4 py-2">Pickup</td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">2 hours ago</td>
            <td className="px-4 py-2"></td>
          </tr>

          <tr className="border-b hover:bg-gray-100">
            <td className="px-4 py-2">#290888890</td>
            <td className="px-4 py-2">Faith Chima</td>
            <td className="px-4 py-2">295 Herbert Macualay Way, yaba, Lagos</td>
            <td className="px-4 py-2">I need a runner that can do a quick laundry pickup</td>
            <td className="px-4 py-2">Pickup</td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">2 hours ago</td>
            <td className="px-4 py-2"></td>
          </tr>

          <tr className="border-b hover:bg-gray-100">
            <td className="px-4 py-2">#290888890</td>
            <td className="px-4 py-2">Faith Chima</td>
            <td className="px-4 py-2">295 Herbert Macualay Way, yaba, Lagos</td>
            <td className="px-4 py-2">I need a runner that can do a quick laundry pickup</td>
            <td className="px-4 py-2">Pickup</td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">2 hours ago</td>
            <td className="px-4 py-2"></td>
          </tr>

          <tr className="border-b hover:bg-gray-100">
            <td className="px-4 py-2">#290888890</td>
            <td className="px-4 py-2">Faith Chima</td>
            <td className="px-4 py-2">295 Herbert Macualay Way, yaba, Lagos</td>
            <td className="px-4 py-2">I need a runner that can do a quick laundry pickup</td>
            <td className="px-4 py-2">Pickup</td>
            <td className="px-4 py-2">Completed</td>
            <td className="px-4 py-2">2 hours ago</td>
            <td className="px-4 py-2"></td>
          </tr>

         
        </tbody>
      </table>

      <div className="flex items-center  px-4 py-4 text-sm">
        {/* <div>Showing 1 to 10 of 100 Entries</div> */}
        <div className="flex justify-end items-center space-x-2">
          <button className="rounded border font-bold border-blue-500 text-blue-500 px-2 py-1 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Previous
          </button>
          <button className="rounded border font-bold border-blue-500 text-blue-500 px-4 py-1 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
