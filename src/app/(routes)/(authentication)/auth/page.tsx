"use client";

import { UserInfo } from "@/context/UserContext";
import { IFormdata } from "@/utlis";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Auth() {
  const [validateError, setError] = useState<string | null>(null);
  // const {id , setId} = useContext(UserInfo)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormdata>();
  const { push } = useRouter();
  const onSumbit: SubmitHandler<IFormdata> = async (data) => {
    console.log(data);
    const formdata = new FormData();
    formdata.append("username", data.email);
    formdata.append("password", data.password);
    const response = await (
      await fetch("/api/auth", {
        method: "POST",
        body: formdata,
      })
    ).json();
    if (response.detail) {
      setError(response.detail);
    } else {
      const response = await(await fetch(`/api/get-user?username=${data.email}`)).json()
      console.log(response);
      localStorage.setItem("id" , response.id)
      // setId(response.id)
      push("/");
      console.log(response);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col p-10 justify-center items-center gap-4 bg-white border border-black"
        onSubmit={handleSubmit(onSumbit)}
      >
        <h5 className="text-3xl font-bold">Login</h5>
        <label className="text-xl font-bold">Enter Your Email</label>
        <input
          className="px-10 py-3 border-2 "
          type="email"
          {...register("email", { required: "Email Must Requried" })}
        />
        <label className="text-xl font-bold">Enter Your Password</label>
        <input
          className="px-10 py-3 border-2 "
          type="password"
          {...register("password", { required: "Password Must Requried" })}
        />
        <p className="text-red-400 font-bold">
          {errors.email?.message || errors.password?.message || validateError}
        </p>
        <button className="px-8 py-4 text-white font-bold bg-teal-300">
          Sumbit
        </button>
        <p>
          Donot Have Account ?{" "}
          <Link className="text-teal-500" href={"/register"}>
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
}
