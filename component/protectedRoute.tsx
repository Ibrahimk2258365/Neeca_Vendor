"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  role: "admin" | "client";
  email: string;
  allowed_products?: string[];
  // Add other fields from API if needed
}

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: "admin" | "client";
}

export default function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/public/login");
        return;
      }

      try {
        const res = await fetch("https://dev-server.neers.com.pk/me", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await res.json();

        if (data.message === "Token is verified" && data.user) {
          setUser(data.user);

          // Check role from API response
          if (role && data.user.role !== role) {
            router.replace("/public/login");
            return;
          }

          // Everything is fine
          setIsChecking(false);
        } else {
          // Invalid token
          localStorage.removeItem("token");
          router.replace("/public/login");
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        localStorage.removeItem("token");
        router.replace("/public/login");
      }
    };

    verifyToken();
  }, [role, router]);

  if (isChecking) return null; 

  return <>{children}</>;
  
}
