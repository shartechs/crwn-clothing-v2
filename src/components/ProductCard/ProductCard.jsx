import { useContext } from "react";

import { ProductCardStyled } from "./ProductCard.styled";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardStyled>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        className={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardStyled>
  );
};

export default ProductCard;
