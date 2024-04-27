import MarkAsRead from '@/logics/make-as-read'
import React from 'react'


const Notification = () => {
  return (
    <div>
          <div className="w-full  p-16">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex justify-between space-x-2">
                        <h2 className="text-lg text-black font-semibold">Appointments</h2>
                        <div className="bg-green-500 text-white px-1  rounded-lg">6 new</div>
                      </div>
                    </div>
                    <div className="space-y-4 ">
                  
                      <div className="flex px-2 bg-[#E8E6F9] gap-80 justify-between rounded-lg items-center">
                        <div className="py-4  space-y-2">
                          <p className="font-semibold text-sm text-black">
                            Emmanuel just made an errand request from Ajah lagos
                          </p>
                        <div className="text-gray-500 text-sm">Dec 12, 2023 at  10:13 AM</div>
                      </div>
                          <MarkAsRead />
                    </div>
                      
                      <div className="flex px-2 bg-[#E8E6F9] justify-between rounded-lg items-center">
                        <div className="py-4  space-y-2">
                          <p className="font-semibold text-sm text-black">
                            Roland just made an errand request for a laundry pickup
                          </p>
                          <div className="text-gray-500 text-sm">Dec 11, 2023 at  09:10 AM</div>
                        </div>
                        <div className="bg-green-400 w-16 h-16 flex  items-center justify-center rounded-full text-white font-bold">
                          EK
                        </div>
                      </div>

                      <div className="flex px-2 bg-[#E8E6F9] justify-between rounded-lg items-center">
                        <div className="py-4 space-y-2">
                          <p className="font-semibold text-sm text-black">
                            You have a new errand request for pickup
                          </p>
                          <div className="text-gray-500 text-sm">Dec 04, 2023 at  13:38 PM</div>
                        </div>
                        <div className="bg-[#F2C31C] w-16 h-16 flex items-center justify-center rounded-full text-white font-bold">
                          JS
                        </div>
                      </div>

                      <div className="flex px-2 bg-[#E8E6F9] gap-80 justify-between rounded-lg items-center">
                        <div className="py-4  space-y-2">
                          <p className="font-semibold text-sm text-black">
                            Emmanuel just made an errand request from Ajah lagos
                          </p>
                        <div className="text-gray-500 text-sm">Dec 12, 2023 at  10:13 AM</div>
                      </div>
                        <div className="bg-[#737587] w-16  h-16 flex items-center justify-center rounded-full text-white font-bold">
                          CO
                        </div>
                    </div>

                    <div className="flex px-2 bg-[#E8E6F9] justify-between rounded-lg items-center">
                        <div className="py-4  space-y-2">
                          <p className="font-semibold text-sm text-black">
                            Roland just made an errand request for a laundry pickup
                          </p>
                          <div className="text-gray-500 text-sm">Dec 11, 2023 at  09:10 AM</div>
                        </div>
                        <div className="bg-green-400 w-16 h-16 flex  items-center justify-center rounded-full text-white font-bold">
                          EK
                        </div>
                      </div>

                      <div className="flex px-2 bg-[#E8E6F9] justify-between rounded-lg items-center">
                        <div className="py-4 space-y-2">
                          <p className="font-semibold text-sm text-black">
                            You have a new errand request for pickup
                          </p>
                          <div className="text-gray-500 text-sm">Dec 04, 2023 at  13:38 PM</div>
                        </div>
                        <div className="bg-[#F2C31C] w-16 h-16 flex items-center justify-center rounded-full text-white font-bold">
                          JS
                        </div>
                      </div>

                    </div>
            
                  </div>
    </div>
  )
}

export default Notification