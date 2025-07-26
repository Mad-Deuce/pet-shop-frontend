import * as Yup from "yup";

export const defaultValues = {
  priceFrom: null,
  priceTo: null,
  discounted: false,
  sort:
  {
    text: "by default",
    value: null,
  },
};

export const fields = {
  priceFrom: {
    name: "priceFrom",
    type: "number",
    placeholder: "from",
  },
  priceTo: {
    name: "priceTo",
    type: "number",
    placeholder: "to",
  },
  discounted: {
    name: "discounted",
    type: "checkbox",
    placeholder: "",
  },
  sort: {
    name: "sort",
    type: "",
    placeholder: "",
    options: [{
      text: "by default",
      value: null,
    },
    {
      text: "newest",
      value: "newest",
    },
    {
      text: "price: high-low",
      value: "price_desc",
    },
    {
      text: "price: low-high",
      value: "price_asc",
    },]
  },
};



export const registerSchema = Yup.object({
  priceFrom: Yup.number()
    .positive("must be positive"),
  priceTo: Yup.number()
    .positive("must be positive"),
});