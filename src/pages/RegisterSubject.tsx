import { zodResolver } from "@hookform/resolvers/zod";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import React, { FormEvent, useState } from "react";
import { FieldValues, useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { db } from "../utils/firebase";
import AutocompleteInput from "../components/molecules/AutocompleteInput";

type Props = {};

function RegisterSubject({}: Props) {
  const [examDate, setExamDate] = useState({
    startDate: null,
    endDate: null,
  });

  const handleExamDateChange = (newDate: any) => {
    console.log("newDate:", newDate);
    setExamDate(newDate);
  };

  const testAsync = async ()=>{
    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);
    console.log({querySnapshot});
    
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }

  const onSubmit = async (data: FieldValues) => {

    console.log(data);
    try {
      const response = await addDoc(collection(db, "subjects"), {
        name: data.name,
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
    name: z.string().min(2).max(255),
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
        <AutocompleteInput collectionName="users" />
        <button onClick={testAsync}>TEST</button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 py-8"
      >
        <div>
          <label className="text-xl block" htmlFor="name">
            Subject Name
          </label>
          <input
            {...register("name")}
            className="text-2xl border-[3px] rounded-xl px-6 py-2"
            type="text"
            id="name"
          />
          {errors.name && (
            <p className="text-red-400 text-l">{errors.name.message}</p>
          )}

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

export default RegisterSubject;
