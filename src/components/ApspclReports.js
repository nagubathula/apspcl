"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "shadcn-ui/button";
import Input from "shadcn-ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "shadcn-ui/table"; // Adjust according to your setup

const ApspclReports = () => {
  const [reportsData, setReportsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reports");
        setReportsData(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const filteredReports = reportsData.filter((report) => {
    const matchesSearch = report.reportname
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterType === "" || report.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Search :</span>
          <Input
            type="text"
            placeholder="Search by report name..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded-l focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Show :</span>
          <Button
            variant={filterType === "" ? "primary" : "outline"}
            onClick={() => handleFilterChange("")}
          >
            All
          </Button>
          <Button
            variant={filterType === "report" ? "primary" : "outline"}
            onClick={() => handleFilterChange("report")}
          >
            Reports
          </Button>
          <Button
            variant={filterType === "return" ? "primary" : "outline"}
            onClick={() => handleFilterChange("return")}
          >
            Returns
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Report Name</TableHead>
            <TableHead>Title</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredReports.map((report, index) => (
            <TableRow key={index}>
              <TableCell>{report.type}</TableCell>
              <TableCell>{report.reportname}</TableCell>
              <TableCell>
                <a href={report.filepath} className="text-blue-500 hover:underline">
                  {report.title}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApspclReports;
