"use client"
import TendersTable from "@/components/TendersTable";
import UploadForm from "@/components/UploadForm";
import NewTenderAdminFetch from "@/components/NewTenderAdminFetch";
import Modal from "@/components/GoosModal"
import NewGOOAdminFetch from "@/components/GooAdminFetch";

export default function Home() {
  return (
    <div className="relative">
     
      <div className="">
        {/* <UploadForm /> */}
        <Modal />
        <NewGOOAdminFetch />
      </div>
      
    </div>
  );
}
