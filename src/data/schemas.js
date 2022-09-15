import { object, string, boolean } from "yup";

export const signinSchema = object().shape({
  email: string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: string()
    .required("Required")
    .min(8, "Must be at least 8 characters"),
});

export const signupSchema = object().shape({
  day: string().required("Required"),
  month: string().required("Required"),
  year: string().required("Required"),
  email: string()
    .email("Please enter a valid email address")
    .required("Required"),
  nickname: string()
    .required("1-30 characters, cannot have only spaces.")
    .min(1)
    .max(30),
  password: string()
    .required("Required")
    .min(8, "Must be at least 8 characters"),
  career: string().required("Please select a role."),
  avatar: string().required("Required"),
  terms: boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
