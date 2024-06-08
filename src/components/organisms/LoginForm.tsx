import { FormEvent, ReducerAction, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

type Props = {
  dispatch: any
};

function LoginForm({ dispatch }: Props) {
  const navigate = useNavigate();

  const schema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(3),
  });

  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    signInWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (user) {
          dispatch({type:'login',payload:user});
          navigate("/profile")
        };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <form
        className="flex flex-col gap-8 py-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3 text-xl" htmlFor="email">
            <HiOutlineMail className="h-8 w-8" />
            Email
          </label>
          <input
            {...register("email")}
            className="border border-gray-300 text-2xl px-6 py-3 rounded-full"
            type="text"
            id="email"
          />
          {errors.email && (
            <p className="text-red-400 text-l">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 pb-4">
          <label className="flex items-center gap-3 text-xl" htmlFor="password">
            <HiOutlineLockClosed className="h-8 w-8" />
            Password
          </label>
          <input
            {...register("password")}
            className="border border-gray-300 text-2xl px-6 py-3 rounded-full"
            type="password"
            id="password"
          />
          {errors.password && (
            <p className="text-red-400 text-l">{errors.password.message}</p>
          )}
        </div>

        <div className="flex justify-center items-center">
          <button
            disabled={!isValid}
            className="text-2xl rounded-full text-white bg-gray-500 px-8 py-3  hover:bg-gray-600"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
