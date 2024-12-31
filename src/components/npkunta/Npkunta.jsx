
"use client"
import React from "react";

import DownloadListView from "@/components/npkunta/DownloadListView";
import InformationListView from "@/components/npkunta/InformationListView";
import LandDetailsView from "@/components/npkunta/LandDetailsView";


const Npkunta = () => {
  return (
    <div className="mb-12">
      <header >
        <h1 className="text-4xl font-bold ">N.P. KUNTA</h1>
      </header>
      <div className="flex flex-col gap-8">
        <DownloadListView />
        <InformationListView />
        <LandDetailsView />
      </div>
    </div>
  );
};

export default Npkunta;
