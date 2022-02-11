import React, { useContext } from  'react';

import { CartContainer, ShoppingIcon, ItemCountContainer } from "./cart-icon.styles";
import { CartContext } from '../../providers/cart/cart.provider';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <CartContainer onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCountContainer className="item-count">
        {cartItemsCount}
      </ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;