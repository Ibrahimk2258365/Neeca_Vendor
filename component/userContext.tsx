"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// ✅ Define the shape of the context
interface UserContextType {
  user: any | null;                 // Replace `any` with your User type if you have one
  setUser: (user: any | null) => void;
  current_step1: number | null;     // Assuming step is a number; adjust type if needed
  setCurrentStepC: (step: number | null) => void;
}

// ✅ Create context with default value as undefined
const UserContext = createContext<UserContextType | undefined>(undefined);

// ✅ Provider props type
interface UserProviderProps {
  children: ReactNode;
}

// ✅ UserProvider component
export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<any | null>(null);
  const [current_step1, setCurrentStepC] = useState<number | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser, current_step1, setCurrentStepC }}>
      {children}
    </UserContext.Provider>
  );
}

// ✅ Custom hook to use the context
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
