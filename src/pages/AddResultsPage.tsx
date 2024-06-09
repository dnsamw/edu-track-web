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

function AddResultsPage({}: Props) {
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
      const response = await addDoc(collection(db, "examResults"), {
        student: data.student,
        subject: data.subject,
        unit: data.unit,
        marks:data.marks,
        examDate:data.date,
        comment:data.comment,
        timeStamp: serverTimestamp(),
      });

      console.log(response.id);
    } catch (error) {
      console.log(error);
    }
  };

  const schema = z.object({
    student: z.string().min(2).max(255),
    subject: z.string().min(2).max(255),
    unit: z.string().min(2).max(255),
    date: z.string().min(1, "Please select a date"),
    marks: z.string().min(0),
    comment: z.string().min(2).max(255),
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
          <label className="text-xl block" htmlFor="student">
            Student
          </label>
          <input
            {...register("student")}
            className="text-2xl border-[3px] rounded-xl px-6 py-2"
            type="text"
            id="student"
          />
          {errors.student && (
            <p className="text-red-400 text-l">{errors.student.message}</p>
          )}
        </div>
        <div>
          <label className="text-xl block" htmlFor="subject">
            Subject
          </label>
          <input
            {...register("subject")}
            className="text-2xl border-[3px] rounded-xl px-6 py-2"
            type="text"
            id="subject"
          />
          {errors.subject && (
            <p className="text-red-400 text-l">{errors.subject.message}</p>
          )}
        </div>
        <div>
          <label className="text-xl block" htmlFor="unit">
            Unit
          </label>
          <input
            {...register("unit")}
            className="text-2xl border-[3px] rounded-xl px-6 py-2"
            type="text"
            id="unit"
          />
          {errors.unit && (
            <p className="text-red-400 text-l">{errors.unit.message}</p>
          )}
        </div>

        <div>
          <Controller
            {...register("date")}
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
          {errors.date && (
            <p className="text-red-400 text-l">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="text-xl block" htmlFor="marks">
            Marks
          </label>
          <input
            {...register("marks")}
            className="text-2xl border-[3px] rounded-xl px-6 py-2"
            type="number"
            id="marks"
          />
          {errors.marks && (
            <p className="text-red-400 text-l">{errors.marks.message}</p>
          )}
        </div>
        <div>
          <label className="text-xl block" htmlFor="comment">
            Comment
          </label>
          <textarea
            {...register("comment")}
            className="text-2xl border-[3px] rounded-xl px-6 py-2"
            id="comment"
          />
          {errors.comment && (
            <p className="text-red-400 text-l">{errors.comment.message}</p>
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

export default AddResultsPage;
