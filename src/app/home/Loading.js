import React from "react";

const loading = () => {
  return (
    <div className="p-4 rounded shadow">
      <div className="animate-pulse ">
        <div className="ml-30 flex gap-3 ">
          <div className="h-10 bg-gray-400 rounded-full  w-10"></div>
            <div className="h-4 rounded w-1/2 bg-gray-400 gap-2">
                <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                <div className="h-3 mt-1 bg-gray-400 rounded w-1/2"></div>
            </div>
            
            
          
        </div>

        <div className="space-y-2 mt-2 bg-slate-200 p-4 h-auto">
            <div className="flex gap-2 ">
            <div className="h-5 bg-gray-400 rounded w-1/4"></div>
            <div className="h-5 bg-gray-400 rounded w-1/4"></div>
            </div>
            
            <div className="h-4  bg-gray-400 rounded"></div>
            <div className="h-4 mt-2 bg-gray-400 rounded "></div>
            

        </div>
      </div>
    </div>
  );
};

export default loading;
