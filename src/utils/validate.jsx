import * as yup from "yup";

const USER_VALIDATION_SCHEMA = yup.object({
  email: yup.string().trim().min(6).max(64).email("Невірний формат").required(),
  password: yup.string().trim().min(6).max(64).required(),
  passwordConf: yup
    .string()
    .oneOf([yup.ref("password")], "Паролі повинні збігатися")
    .required("Підтвердіть пароль"),
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .matches(/^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/, "Only English letters ")
    .required(),
  lastName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .matches(/^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/, "Only English letters ")
    .required(),
});
export default USER_VALIDATION_SCHEMA;
