// import React from 'react'

import { Button, Label, TextInput } from "flowbite-react";
import { reset, resetPasswordConfirm } from "../../features/auth/authSlicer";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CustomSpinner from "../../components/Spinner";

const ResetPasswordConfirmPage = () => {
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { uid, token } = useParams();
  const { new_password, re_new_password } = formData;

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
      uid,
      token,
      new_password,
      re_new_password,
    };
    dispatch(resetPasswordConfirm(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/login");
      toast.success("Your password was reset successfully.");
    }
    dispatch(reset());
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
                  Reset password
                </h1>
                {isLoading && <CustomSpinner />}
                <form>
                  <div className="mb-6 flex flex-col gap-y-3">
                    <Label htmlFor="new_password">Your password</Label>
                    <TextInput
                      id="new_password"
                      name="new_password"
                      placeholder="••••••••"
                      type="password"
                      onChange={handleChange}
                      value={new_password}
                      required
                    />
                  </div>
                  <div className="mb-6 flex flex-col gap-y-3">
                    <Label htmlFor="re_new_password">Confirm password</Label>
                    <TextInput
                      id="re_new_password"
                      name="re_new_password"
                      placeholder="••••••••"
                      type="password"
                      onChange={handleChange}
                      value={re_new_password}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <Button
                      type="submit"
                      className="w-full lg:w-auto"
                      onClick={handleSubmit}
                    >
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
};

export default ResetPasswordConfirmPage;
