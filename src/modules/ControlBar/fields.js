import * as Yup from "yup";

export const defaultValues = {
  priceFrom: null,
  priceTo: null,
  discounted: false,
  sort:
  {
    text: "by default",
    value: "",
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
    type: "",
    placeholder: "",
  },
  sort: {
    name: "sort",
    type: "",
    placeholder: "",
    options: [{
      label: "by default",
      value: "",
    },
    {
      label: "newest",
      value: "newest",
    },
    {
      label: "price: high-low",
      value: "price_desc",
    },
    {
      label: "price: low-high",
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