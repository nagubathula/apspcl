"use client"
import TendersTable from "@/components/TendersTable";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <div className="relative">
     
      <div className="">
        {/* <UploadForm /> */}
        <TendersTable />
      </div>
      
    </div>
  );
}
