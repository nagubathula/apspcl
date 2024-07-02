"use client"
import Header from "@/components/Header1";
import Navbar from "@/components/Navbar";
import FooterLinks from "@/components/FooterLinks";
import ReportTable from "@/components/ReportsTable";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-50">
        <Header />
        <Navbar />
      </div>
      <div className="my-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 py-8 px-4 sm:px-6 lg:px-8">
        <UploadForm />
        <ReportTable />
      </div>
      <FooterLinks />
    </div>
  );
}
