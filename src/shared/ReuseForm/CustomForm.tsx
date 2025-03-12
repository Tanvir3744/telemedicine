import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

// declare resolver separate type to integrate into hookform
type formValidationConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolver?: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: Record<string, any>;
}

type FormType = {
  children: React.ReactNode,
  onSubmit: SubmitHandler<FieldValues>
} & formValidationConfig;


const CustomForm = ({ children, onSubmit,resolver, defaultValues }: FormType) => {
  const formConfig:formValidationConfig = {};

  if(defaultValues){
    formConfig["defaultValues"] = defaultValues;
  }

  // check if resolver exist into the formconfig
  if(resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const {handleSubmit} = methods;
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data)
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};
export default CustomForm;
