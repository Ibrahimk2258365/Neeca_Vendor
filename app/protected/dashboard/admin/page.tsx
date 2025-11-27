import ProtectedRoute from "../../../../component/protectedRoute"


export default function AdminDashboard(){
        return (<ProtectedRoute role="admin">
               <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-[#F76300] mb-4">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-700">
          Welcome, Admin! Here you can manage products, users, and settings.
        </p>

        {/* Example admin panel sections */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="font-semibold text-xl mb-2">Users</h2>
            <p>Manage all registered users and their roles.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="font-semibold text-xl mb-2">Products</h2>
            <p>View, add, edit, or delete products from the system.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="font-semibold text-xl mb-2">Orders</h2>
            <p>Track and manage all orders made by users.</p>
          </div>
        </div>
      </div>
        </ProtectedRoute>)
}