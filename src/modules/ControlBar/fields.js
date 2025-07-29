import * as Yup from "yup";

export const defaultValues = {
  priceFrom: null,
  priceTo: null,
  discounted: false,
  sort:
  {
    label: "by default",
    value: "default",
  },
};

export const fields = {
  priceFrom: {
    name: "minPrice",
    type: "number",
    placeholder: "from",
  },
  priceTo: {
    name: "maxPrice",
    type: "number",
    placeholder: "to",
  },
  discounted: {
    name: "discont",
    type: "",
    placeholder: "",
  },
  sort: {
    name: "sortBy",
    type: "",
    placeholder: "",
    options: [{
      label: "by default",
      value: "default",
    },
    {
      label: "newest",
      value: "newest",
    },
    {
      label: "price: high-low",
      value: "priceHigh",
    },
    {
      label: "price: low-high",
      value: "priceLow",
    },]
  },
};



export const registerSchema = Yup.object({
  priceFrom: Yup.number()
    .positive("must be positive"),
  priceTo: Yup.number()
    .positive("must be positive"),
});