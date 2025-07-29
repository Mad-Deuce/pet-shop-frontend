import { useState } from "react";

const useFilter = ({ initialParams }) => {
  const [params, setParams] = useState(initialParams);
  const handleFilterChange = (filter) => {
    const modifyFilter = { ...filter };
    if (!modifyFilter.minPrice) {
      delete modifyFilter.minPrice;
    }
    if (!modifyFilter.maxPrice) {
      delete modifyFilter.maxPrice;
    }
    if (!modifyFilter.discont) {
      delete modifyFilter.discont;
    }
    modifyFilter.sortBy = modifyFilter.sortBy.value;
    console.log("filteredValue: ", modifyFilter);

    setParams(modifyFilter);
  };

  return { params, setParams, handleFilterChange };
};

export default useFilter;
