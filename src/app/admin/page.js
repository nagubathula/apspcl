import React from "react";
import PeopleForm from "@/components/PeopleForm";
import PeopleList from "@/components/PeopleList";
import ReportTable from "@/components/ReportsTable";
import UploadForm from "@/components/UploadForm";

const page = () => {
  return (
    <div>
      <div className="my-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 py-8 px-4 sm:px-6 lg:px-8">
        <UploadForm />
        <ReportTable />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center my-8">
          People Management
        </h1>
        {/* <PeopleForm /> */}
        <PeopleList />
      </div>
    </div>
  );
};

export default page;
