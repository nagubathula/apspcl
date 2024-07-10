import React from "react";

const QuickLink2 = () => {
  return (
    <div className="w-full flex flex-row justify-between my-2 bg-gray-50 ">
      {/* Second Column */}
      <div className=" w-1/2 p-4">
        <img
          src="/public/templates/apspclcms/images/andhra-pradesh.png"
          alt="Andhra Pradesh Logo"
          className="mx-auto rounded-lg "
        />
      </div>

      {/* Third Column */}
      <div className=" p-4 w-1/2 rounded-lg bg-gra7-100">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl font-bold mb-4 text-left">News & Events</h3>

          <a href="/news" className="btn Btn_news ">
            View All <i className="ti-angle-right ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickLink2;
