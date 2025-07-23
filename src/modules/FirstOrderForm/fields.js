import * as Yup from "yup";

export const defaultValues = {
  name: "xxxxx",
  phone: "+123 123-456-78-91",
  email: "email@email.mock"
};

export const fields = {
  name: {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Name",
  },
  phone: {
    label: "Phone number",
    name: "phone",
    type: "phone",
    placeholder: "Phone number",
  },
  email: {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email",
  },
};

const nameRule = {
  regexp: /^[a-zA-Z0-9]+$/,
  message: "Special characters are not allowed in name",
};

const phoneRule = {
  regexp: /^\+[0-9]{1,4}[ ][0-9]{2,3}[-][0-9]{3}-[0-9]{2}-[0-9]{2}/,
  message: "Phone number is not valid (+[country code] 012-34-56-78)"
}

export const registerSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required()
    .min(5, "The name must be at least 5 characters long.")
    .matches(nameRule.regexp, nameRule.message),
  email: Yup.string().trim().required().email(),
  phone: Yup.string()
    .trim()
    .required()
    .matches(phoneRule.regexp, phoneRule.message)
});