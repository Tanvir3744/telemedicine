"use server";

import { FieldValues } from "react-hook-form";

export const loginPatient = async (formData: FieldValues) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData),
      cache: "no-store",
    }
  );
  const loginInfo = await response.json();
  return loginInfo;
};


