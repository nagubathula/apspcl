"use client";
import React from "react";

import DownloadListView from "@/components/gaaliveedu/DownloadListView";
import InformationListView from "@/components/gaaliveedu/InformationListView";
import LandDetailsView from "@/components/gaaliveedu/LandDetailsView";

const Gaaliveedu = () => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold ">N.P. KUNTA</h1>
      </header>
      <div>
        <DownloadListView />
        <InformationListView />
        <LandDetailsView />
      </div>
    </div>
  );
};

export default Gaaliveedu;
