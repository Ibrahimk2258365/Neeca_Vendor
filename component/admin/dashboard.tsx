"use client";

import React from "react";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";

// fanmember@daouse.com
// password:090ddb1310413778


export default function AdminDashboard() {

  return (
    <div className="">

       <div className="flex flex-col items-center justify-center  p-6">
            <div className="text-4xl font-bold text-[#F76300] mb-4">Welcome to  Admin Dashboard</div>
            <div className="text-lg text-gray-700"> Choose a section from the left menu.</div>

        </div>
    </div>
  );
}
    