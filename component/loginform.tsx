"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CLIENT_LOGIN } from "../graphql/mutations/ClientLogin";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Admin_Login } from "@/graphql/mutations/AdminLogin";
import { useState } from "react";
const clientLoginInputSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type ClientLoginInput = z.infer<typeof clientLoginInputSchema>;

// 🔥 Your custom JWT type
interface DecodedToken {
  id: string;
  role: "admin" | "client";
  name: string;
  email: string;
  exp: number;
  iat: number;
}

interface ClientLoginResponse {
  clientLogin: {
    id: string;
    email: string;
    token: string;
    status: string;
    success: boolean;
    message: string;
  };
}

interface AdminLoginResponse {
  adminLogin: {
    id: string;
    email: string;
    token: string;
    status: string;
    success: boolean;
    message: string;
  };
}

export default function LoginForm() {
  const [loginAs, setLoginAs] = useState<"client" | "admin">("client");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClientLoginInput>({
    resolver: zodResolver(clientLoginInputSchema),
  });

  const [clientLogin] = useMutation<
    ClientLoginResponse,
    { email: string; password: string }
  >(CLIENT_LOGIN);

  const [adminLogin] = useMutation<
    AdminLoginResponse,
    { email: string; password: string }
  >(Admin_Login);

  //client login and admin login
  const onSubmit = async (values: ClientLoginInput) => {
    try {
      let response;

      if (loginAs === "admin") {
        response = await adminLogin({
          variables: {
            email: values.email,
            password: values.password,
          },
        });

        // Handle Admin Response
        if (response.data?.adminLogin.success) {
          const token = response.data.adminLogin.token;

          localStorage.setItem("token", token);

          const decoded = jwtDecode<DecodedToken>(token);

          toast.success("Admin Login successful!");

          router.push("/protected/dashboard/admin");
          return;
        }

        toast.error(response.data?.adminLogin.message || "Admin login failed");
        return;
      }

  
      response = await clientLogin({

        variables: {

          email: values.email,
          password: values.password,

        },
      });

      if (response.data?.clientLogin.success) {
        const token = response.data.clientLogin.token;

        localStorage.setItem("token", token);

        const decoded = jwtDecode<DecodedToken>(token);

        toast.success("Login successful!");

        if (decoded.role === "admin") {
          router.push("/protected/dashboard/admin");
        } else {
          router.push("/protected/product/list");
        }

        return;
      }

      toast.error(response.data?.clientLogin.message || "Client login failed");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="py-4 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-between ">
        <h3 className="text-3xl text-[#f76300] font-semibold pt-2 leading-[27px] ">
          Login
        </h3>
      </div>

      <div className="flex mt-8  items-center justify-center border-1 border-gray-100 rounded-2xl shadow-lg shadow-gray-200 w-11/12 mx-auto ">
        <div className="w-full lg:w-1/2 h-[80vh] flex flex-col justify-center items-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-4 mx-auto"
          >
            <div>
              <label htmlFor="">
                <span className="text-red-500">*</span> Email Address
              </label>
              <input
                className="px-2 py-1 border-gray-200 w-full rounded  border-1 placeholder:text-gray-400"
                placeholder="Example@gmail.com"
                {...register("email")}
                type="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="">
                <span className="text-red-500">*</span>Password
              </label>
              <input
                type="password"
                {...register("password")}
                className="w-full border-1 border-gray-200 placeholder:text-gray-400 text-black py-2 px-1 rounded"
                placeholder="use character & Symbol"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* <div>
              <input type="checkbox" className="w-5 h-5 mt-1 cursor-pointer " />
              <label htmlFor="" className="m-2 ">
                Remember me
              </label>  
            </div> */}
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="adminCheck"
                className="w-4 h-4 cursor-pointer"
                onChange={(e) =>
                  setLoginAs(e.target.checked ? "admin" : "client")
                }
              />
              <label htmlFor="adminCheck" className="cursor-pointer">
                Login as Admin
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#F76300] w-full h-10 text-lg font-semibold rounded-[3px] text-white  "
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>

            <div className=" flex flex-col justify-between text-[11px] leading-3">
              <div>
                {" "}
                <p>
                  Don’t have Account ?
                  <span className="text-[#F76300] cursor-pointer">
                    Sign up{" "}
                  </span>
                </p>
              </div>
              <div>
                {" "}
                <p className="text-[#F76300] cursor-pointer ">
                  Forgot Password
                </p>
              </div>
            </div>
            <div className="text-[11px] leading-3"></div>
            <div>
              <label
                htmlFor=""
                className="text-[15px] leading-[24px] font-semibold"
              >
                Contact Us
              </label>
            </div>

            <div className="w-full h-[34px] shadow-1xl shadow-gray-400 rounded-[10px] bg-[#FAFAFA] text-[10px]  ">
              <p className="text-center">
                In case of any problem contact us on{" "}
                <span className="text-[#F76300] ">(051)9218862</span>
              </p>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2">
          <Image
            className="w-full h-[80vh]"
            width={2030}
            height={2030}
            src="https://neers-client-v3.vercel.app/_next/image?url=%2Fimages%2Flogin.png&w=3840&q=75"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
}
