import React from 'react'
import Modal from "@/components/NewTenderForm"
import NewTenderFetch from '@/components/NewTenderFetch'
import NewTenderAdminFetch from '@/components/NewTenderAdminFetch'

const page = () => {
  return (
    <div>
    <Modal />
    <NewTenderFetch />
    <NewTenderAdminFetch />
    </div>
  )
}

export default page