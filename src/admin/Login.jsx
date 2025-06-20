import React, { useEffect, useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";
import LoginImage from "../assets/LoginImages.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const token = import.meta.env.VITE_TOKEN;

  const handleLogin = () => {
    if (email === "admin@test.com" && password === "admin") {
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    } else {
      toast.error("Email or Password wrong!!");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") === token) {
      window.location.href = "/dashboard";
    }
  }, [token]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email(),
      password: Yup.string().required("Password is required"),
    }),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="bg-white h-screen ">
      <Toaster position="top-right" reverseOrder={false} />
      <section className="">
        <div className="lg:flex lg:justify-between items-center px-6 mx-auto md:h-screen lg:py-0">
          <div className="flex justify-center ">
            <img src={LoginImage} alt="Images" className="w-1/2 " />
          </div>
          <div className="w-full  bg-white  rounded-lg shadow mr-10 md:mt-0 xl:p-0">
            <div className="p-10 mt-3 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-semibold text-center leading-tight tracking-tight text-gray-900 mb-5 md:text-2xl ">
                Login
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    onChange={handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="relative">
                  <div
                    onClick={togglePasswordVisibility}
                    className="absolute top-8 inset-y-0 right-5 flex items-center pl-3 cursor-pointer"
                  >
                    {showPassword ? (
                      <div className="text-lg">
                        <BsEyeSlashFill />
                      </div>
                    ) : (
                      <div className="text-lg">
                        <LiaEyeSolid />
                      </div>
                    )}
                  </div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border   border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={handleChange}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#37474F] hover:bg-[#3d4d53] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  name="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
