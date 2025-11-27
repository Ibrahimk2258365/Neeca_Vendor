// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// // import jwt from "jsonwebtoken";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("auth_token")?.value;

//   const url = req.nextUrl.pathname;

//   // Public routes always allowed
//   if (url.startsWith("/public") || url === "/") {
//     return NextResponse.next();
//   }

//   // If trying to access protected route without login
//   if (!token) {
//     return NextResponse.redirect(new URL("/public/login", req.url));
//   }

//   // Decode token
//   try {

//     const user = jwt.verify(token, process.env.JWT_SECRET!);

//     // Admin-only pages
//     if (url.startsWith("/protected/dashboard/admin")) {
//       if (user.role !== "admin") {
//         return NextResponse.redirect(new URL("/protected/dashboard/client", req.url));
//       }
//     }

//     // Client-only pages
//     if (url.startsWith("/protected/dashboard/client")) {
//       if (user.role !== "client") {
//         return NextResponse.redirect(new URL("/protected/dashboard/admin", req.url));
//       }
//     }

//     return NextResponse.next();
//   } catch (error) {
//     return NextResponse.redirect(new URL("/public/login", req.url));
//   }

// }
