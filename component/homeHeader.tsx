"user client";
import React from "react";

export default function HomeHeader() {
  return (
    <div>
      <div className="flex flex-row justify-between bg-white shadow-md w-full z-10 top-0 sticky  px-16 py-2 items-center">
        <div className="flex flex-row justify-center  items-center">
          <div className="rounded-full h-10 w-10 text-white overflow-hidden font-bold  bg-gray-300">
          </div>
          <div>
          <h2 className="text-lg">welcome user</h2>
        </div>
        </div>
        <div>
 <Link href="/public/login">
                        <button className="bg-[#FFE2CF] text-[12px] w-[80px] h-[29px] cursor-pointer rounded-[3px] text-[#F76300]">
                            Logout
                        </button>
                    </Link>
        </div>
      </div>
    </div>  
  );
}
