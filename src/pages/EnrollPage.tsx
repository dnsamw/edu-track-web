import { zodResolver } from "@hookform/resolvers/zod";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { FieldValues, useForm, Controller } from "react-hook-form";
import Datepicker from "react-tailwindcss-datepicker";
import { z } from "zod";
import { db } from "../utils/firebase";
import { timeStamp } from "console";

type Props = {};

function EnrollPage({}: Props) {
  const [examDate, setExamDate] = useState({
    startDate: null,
    endDate: null,
  });

  const handleExamDateChange = (newDate: any) => {
    console.log("newDate:", newDate);
    setExamDate(newDate);
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const response = await addDoc(collection(db, "users"), {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        birthDate:data.birthDate,
        school:data.school,
        role:'student', 
        active_flg:0,
        delete_flg:0,
        timeStamp: serverTimestamp(),
      });

      console.log(response.id);
    } catch (error) {
      console.log(error);
    }
  };

  const schema = z.object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    email:z.string().max(255).email(),
    birthDate: z.string().min(1, "Please select a date"),
    school: z.string().min(2).max(255),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 py-8"
      >
        <div>
          <label className="text-xl block" htmlFor="firstName">
            First Name
          </label>
          <input
            {...register("firstName")}
            className="text-2xl border-[3px] rounded-xl px-6 py-2"
            type="text"
            id="firstName"
          />
          {errors.firstName && (
            <p className="text-red-400 text-l">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="text-xl block" htmlFor="lastName">
            Last Name
          </label>
          <input
            {...register("lastName")}
            className="text-2xl border-[3px] rounded-xl px-6 py-2"
            type="text"
            id="lastName"
          />
          {errors.lastName && (
            <p className="text-red-400 text-l">{errors.lastName.message}</p>
          )}
        </div>
        <div>
          <label className="text-xl block" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            className="text-2xl border-[3px] rounded-xl px-6 py-2"
            type="email"
            id="email"
          />
          {errors.email && (
            <p className="text-red-400 text-l">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Controller
            {...register("birthDate")}
            control={control}
            render={({ field }) => (
              <Datepicker
                useRange={false}
                asSingle={true}
                value={
                  field.value ? { startDate: field.value, endDate: null } : null
                }
                onChange={(newValue) => field.onChange(newValue?.startDate)}
              />
            )}
          />
          {errors.birthDate && (
            <p className="text-red-400 text-l">{errors.birthDate.message}</p>
          )}
        </div>

        <div>
          <label className="text-xl block" htmlFor="school">
            School
          </label>
          <input
            {...register("school")}
            className="text-2xl border-[3px] rounded-xl px-6 py-2"
            type="text"
            id="school"
          />
          {errors.school && (
            <p className="text-red-400 text-l">{errors.school.message}</p>
          )}
        </div>
        <div>
          <button
            className="rounded-full bg-gray-50 px-16 py-4 text-2xl border  hover:bg-gray-300 escape-button "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnrollPage;
