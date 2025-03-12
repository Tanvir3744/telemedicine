// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const modifyFormData =(values:any) => {
    const obj = {...values};
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("data", data);
    return formData;
}