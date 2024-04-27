import KycDetails from '@/components/kycDetails'
import KycTable from '@/components/kycTable'
import React from 'react'

const Page = () => {
  return (
    <div className='flex gap-3 mt-12'>
          <KycTable />
          <KycDetails />
     </div>
  )
  
}

export default Page