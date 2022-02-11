import React, { useContext } from "react";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { HeaderContainer, LogoContainer, OpstionsContainer, OptionLink } from "./header.styles";

import CurrentUserContext from "../../contexts/current-user/current-user.context";
import { CartContext } from "../../providers/cart/cart.provider";


const Header = () =>{
    const currentUser = useContext(CurrentUserContext);
    const { hidden } = useContext(CartContext);
    return (
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OpstionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/contact">CONTACT</OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={() => auth.signOut()}>
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink to="/signin">SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OpstionsContainer>
        {hidden ? null : <CartDropdown />}
      </HeaderContainer>
    );
};


export default Header;