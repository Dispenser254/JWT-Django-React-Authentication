// import React from 'react'

import { Button, Label, TextInput } from "flowbite-react";

const ResetPasswordConfirmPage = () => {
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
                  Reset password
                </h1>
                <form>
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
                  <div className="mb-6">
                    <Button type="submit" className="w-full lg:w-auto">
                      Reset password
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPasswordConfirmPage