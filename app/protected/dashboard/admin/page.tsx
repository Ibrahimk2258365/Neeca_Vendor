import ProtectedRoute from "../../../../component/protectedRoute"
import AdminDashboard from "@/component/admin/dashboard"

export default function AdminDashboardPage(){

        return (
        <ProtectedRoute role="admin">
               <AdminDashboard/> 
        </ProtectedRoute>)
}