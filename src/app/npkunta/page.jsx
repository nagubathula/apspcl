import Downloads from '@/components/npkunta/Downloads'
import Information from '@/components/npkunta/Information'
import React from 'react'
import LandDetails from '@/components/npkunta/LandDetails'

const page = () => {
  return (
    <div>
        <Downloads />
        <Information />
        <LandDetails />
    </div>
  )
}

export default page