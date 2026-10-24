import * as yup from "yup";

const USER_VALIDATION_SCHEMA = yup.object({
  email: yup.string().trim().min(6).max(64).email("Невірний формат").required(),
  password: yup.string().trim().min(2).max(64).required(),
});
export default USER_VALIDATION_SCHEMA;
