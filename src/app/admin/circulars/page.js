"use client"
import TendersTable from "@/components/TendersTable";
import UploadForm from "@/components/UploadForm";
import NewTenderAdminFetch from "@/components/NewTenderAdminFetch";
import Modal from "@/components/CircularModal"
import NewCIRCULARAdminFetch from "@/components/CircularAdminFetch";

export default function Home() {
  return (
    <div className="relative">
     
      <div className="">
        {/* <UploadForm /> */}
        <Modal />
        <NewCIRCULARAdminFetch />
      </div>
      
    </div>
  );
}
