// import React from 'react'

import { Button } from "flowbite-react"
import { activate, reset } from "../../features/auth/authSlicer";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomSpinner from "../../components/Spinner";

const ActivateAccountPage = () => {

  const { uid, token} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      uid,
      token,
    };
    dispatch(activate(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/login");
      toast.success("Your account has been activated! You can login now");
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
                  Activate Account
                </h1>
                {isLoading && <CustomSpinner/>}
                <form>
                  <div className="mb-6 flex items-center justify-center">
                    <Button type="submit" className="w-full lg:w-auto" onClick={handleSubmit}>
                      Activate account
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

export default ActivateAccountPage