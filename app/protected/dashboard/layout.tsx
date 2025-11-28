"use client";

import React from "react";
import Link from "next/link";
import { useRouter , usePathname , } from "next/navigation";
import { useEffect ,useState} from "react";
import { jwtDecode } from "jwt-decode";
import { number, string } from "zod";

type DecodedToken={
  allowed_access: string[];
  email?:string;
  role?:string;
  iat?:number;
  exp?:number;

}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
   const [authorized, setAuthorized] = useState(false);   // <--- ADD THIS

  const pathname =usePathname();
  const router=useRouter();


  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const decoded = token ? jwtDecode<DecodedToken>(token) : null;


  const allowed = decoded?.allowed_access || [];


  
  const menuItems = [
    { name: "Dashboard", href: "/protected/dashboard/admin" },
    { name: "Vendors", href: "/protected/dashboard/vendors" },
    { name: "Applicant Info", href: "/protected/dashboard/applicant-info" },
    { name: "Models", href: "/protected/dashboard/models" },
    { name: "Testing Labs", href: "/protected/dashboard/testing-labs" },
    // { name: "Printing Firms", href: "/protected/dashboard/printing-firms" },
    // { name: "Printing orders", href: "/protected/dashboard/printing-orders" },
    { name: "Financials", href: "/protected/dashboard/financials"},
    { name: "Reports", href: "/protected/dashboard/reports" },
    { name: "Communication", href: "/protected/dashboard/communication" },
    { name: "Payments", href: "/protected/dashboard/payments" },
    { name: "UsersInfos", href: "/protected/dashboard/UsersInfos" }
  ];
    const handleLogout = () => {
    localStorage.removeItem("token"); // remove the token
  };

   useEffect(() => {
  
    if (!token) {

      router.push("/public/login");

    }
    const currentMenu = menuItems.find(item => pathname.startsWith(item.href));
    // If route exists in menu but user is not allowed → block + redirect
    if (currentMenu && !allowed.includes(currentMenu.name)) {
      
      router.push("/protected/dashboard/admin");
    }

const timeout = setTimeout(() => setAuthorized(true), 0);


  return () => clearTimeout(timeout);



  }, [pathname, allowed]);


if (!authorized) {
    return null; // or a loader component
  }


  

  const filteredMenu = menuItems.filter(item => allowed.includes(item.name));

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg h-screen p-4 space-y-4">
        <h2 className="text-xl font-bold text-[#F76300]">Admin Panel</h2>
        <nav className="flex flex-col gap-3 mt-6">
          {filteredMenu.map((item) => (
            <Link key={item.name} href={item.href} className="p-2 rounded hover:bg-gray-200">
              {item.name}
            </Link>
          ))}
        </nav>
        
                    <Link href="/public/login" onClick={handleLogout}>
                        <button className="bg-[#FFE2CF] text-[12px] w-[80px] h-[29px] cursor-pointer rounded-[3px] text-[#F76300]">
                            Logout
                        </button>
                    </Link>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
