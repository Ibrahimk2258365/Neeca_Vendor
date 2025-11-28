"use client";

import React from "react";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";

export default function AdminDashboard() {
  const token = localStorage.getItem("token");
  const decoded = token ? jwtDecode(token) : null;
  console.log("admin token data is :",decoded);

  const allowed = decoded?.allowed_access || [];

  console.log("allowed projects are :",allowed)
  const menuItems = [
    { name: "Dashboard", href: "/protected/dashboard/admin" },
    { name: "Vendors", href: "/protected/vendors" },
    { name: "Applicant Info", href: "/protected/dashboard/applicant-info" },
    { name: "Models", href: "/protected/dashboard/models" },
    { name: "Testing Labs", href: "/protected/dashboard/testing-labs" },
    { name: "Printing Firms", href: "/protected/dashboard/printing-firms" },
    { name: "Printing orders", href: "/protected/dashboard/printing-orders" },
    { name: "Financials", href: "/protected/dashboard/financials" },
    { name: "Reports", href: "/protected/dashboard/reports" },
    { name: "Communication", href: "/protected/dashboard/communication" },
  ];

  const filteredMenu = menuItems.filter(item =>
    allowed.includes(item.name)
  );

  return (
    <div className="">

       <div className="flex flex-col items-center justify-center  p-6">
            <div className="text-4xl font-bold text-[#F76300] mb-4">Welcome Admin</div>
            <div className="text-lg text-gray-700"> Choose a section from the left menu.</div>

        </div>
    </div>
  );
}
    