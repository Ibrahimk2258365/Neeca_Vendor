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
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg h-screen p-4 space-y-4">
        <h2 className="text-xl font-bold text-[#F76300]">Admin Panel</h2>

        <nav className="flex flex-col gap-3 mt-6">
          {filteredMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="p-2 rounded hover:bg-gray-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Welcome Admin</h1>
        <p className="text-gray-600">Choose a section from the left menu.</p>
      </div>
    </div>
  );
}
    