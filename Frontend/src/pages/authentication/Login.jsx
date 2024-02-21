// import React from 'react'

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfo, login, reset } from "../../features/auth/authSlicer";
import { toast } from "react-toastify";
import CustomSpinner from "../../components/Spinner";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/dashboard");
      toast.success("Login successfull");
    }
    dispatch(reset());
    dispatch(getUserInfo());
  }, [isError, isSuccess, navigate, message, dispatch]);

  return (
    <section className="absolute w-full h-full">
      <div
        className="absolute top-0 w-full h-full bg-gray-900"
        style={{
          backgroundImage: "url('')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full md:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-gray-300 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <h1 className="my-3 text-2xl font-bold dark:text-white md:text-3xl text-center">
                  Sign in to platform
                </h1>
                {isLoading && <CustomSpinner />}
                <form>
                  <div className="mb-4 flex flex-col gap-y-3">
                    <Label htmlFor="email">Your email</Label>
                    <TextInput
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      type="email"
                      onChange={handleChange}
                      value={email}
                      required
                    />
                  </div>
                  <div className="mb-6 flex flex-col gap-y-3">
                    <Label htmlFor="password">Your password</Label>
                    <TextInput
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      type="password"
                      onChange={handleChange}
                      value={password}
                      required
                    />
                  </div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                      <Checkbox id="rememberMe" name="rememberMe" />
                      <Label htmlFor="rememberMe">Remember me</Label>
                    </div>
                    <a
                      href="/reset-password"
                      className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="mb-6">
                    <Button
                      type="submit"
                      className="w-full lg:w-auto"
                      onClick={handleSubmit}
                    >
                      Login to your account
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Not registered?&nbsp;
                    <a
                      href="/register"
                      className="text-primary-600 dark:text-primary-300"
                    >
                      Create account
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
