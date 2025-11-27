"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: "admin" | "client";
}

export default function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/public/login");
      return;
    }

    try {
      const decoded: any = jwtDecode(token);

      // Token expired
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        router.replace("/public/login");
        return;
      }

      const userRole = decoded.role;

      // Role mismatch
      if (role && userRole !== role) {
        router.replace("/public/login");
        return;
      }

      // Everything is fine → allow rendering
      setIsChecking(false);

    } catch (error) {
      localStorage.removeItem("token");
      router.replace("/public/login");
      return;
    }
  }, [role, router]);

  if (isChecking) return null;

  return <>{children}</>;
}
