"use server";
export const registerPatient = async (data: FormData) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/create-patient`, {
        method:"POST",
        body:data,
        cache: "no-store"
    });

    const patientInfo = await response.json();
    return patientInfo;
}