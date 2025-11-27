"use client";
import ProtectedRoute from "../../component/protectedRoute";
export default function ProtectedRoutePage({children}:{children:React.ReactNode}){

    return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    )

}