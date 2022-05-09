import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./CartDropdown.styled.jsx";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { CartDropdownStyled } from "./CartDropdown.styled.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownStyled>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">You cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownStyled>
  );
};

export default CartDropdown;
