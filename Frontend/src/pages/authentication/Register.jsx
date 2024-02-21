// import React from 'react'
import { Button, Label, TextInput } from "flowbite-react";

export const RegisterPage = () => {
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
                  Create an account
                </h1>
                <form>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="mb-4 flex flex-col gap-y-3">
                      <Label htmlFor="first_name">First Name</Label>
                      <TextInput
                        id="first_name"
                        name="first_name"
                        placeholder="First Name"
                        type="text"
                      />
                    </div>
                    <div className="mb-4 flex flex-col gap-y-3">
                      <Label htmlFor="last_name">Last Name</Label>
                      <TextInput
                        id="last_name"
                        name="last_name"
                        placeholder="Last Name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex flex-col gap-y-3">
                    <Label htmlFor="email">Your email</Label>
                    <TextInput
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      type="email"
                    />
                  </div>
                  <div className="mb-6 flex flex-col gap-y-3">
                    <Label htmlFor="password">Your password</Label>
                    <TextInput
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                  <div className="mb-6 flex flex-col gap-y-3">
                    <Label htmlFor="re_password">Confirm password</Label>
                    <TextInput
                      id="re_password"
                      name="re_password"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                  <div className="mb-6 flex items-center justify-center">
                    <Button type="submit" className="w-full lg:w-auto">
                      Create account
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Have an account?&nbsp;
                    <a
                      href="/login"
                      className="text-primary-600 dark:text-primary-300"
                    >
                      Login to account
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

export default RegisterPage;
