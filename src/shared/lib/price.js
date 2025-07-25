  export const getPercentageDiscont = (price, discont_price) => {
    if (!discont_price || !price) return null;
    return (((discont_price - price) * 100) / price).toFixed();
  };