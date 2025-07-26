import { useDispatch } from "react-redux";
import { useState } from "react";

import Card from "./Card/Card";
import ControlBar from "./ControlBar/ControlBar";

import { addToCart } from "/src/redux/cart/cart-slice";
import { sortTypes } from "./ControlBar/sortTypes";

import styles from "./Products.module.css";

export default function Products({ products }) {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  const handleFilterChange = ({ priceFrom, priceTo, discounted, sort }) => {
    setFilteredProducts(
      products
        .filter(({ price, discont_price }) => {
          const currentPrice = discont_price ? discont_price : price;
          return priceFrom && priceFrom != ""
            ? currentPrice >= Number(priceFrom)
            : true;
        })
        .filter(({ price, discont_price }) => {
          const currentPrice = discont_price ? discont_price : price;
          return priceTo && priceTo != ""
            ? currentPrice <= Number(priceTo)
            : true;
        })
        .filter(({ discont_price }) =>
          discounted ? Boolean(discont_price) : true
        )
        .sort(sort ? sortTypes[sort.value] : sortTypes.default)
    );
  };

  const elements = filteredProducts?.map((item) => (
    <Card key={item.id} product={item} handleClick={handleClick} />
  ));

  return (
    <div className={styles.wrapper}>
      <ControlBar handleFilterChange={handleFilterChange} />
      <div className={styles.products}>{elements}</div>;
    </div>
  );
}
