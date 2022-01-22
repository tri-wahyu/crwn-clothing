import React from "react";
import { connect } from "react-redux";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OpstionsContainer, OptionLink } from "./header.styles";

const Header = ({ currentUser, hidden }) =>(
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className="logo"/>
        </LogoContainer>
        <OpstionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={()=> auth.signOut()}>
                    SIGN OUT
                </OptionLink> 
                :
                <OptionLink to="/signin">
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OpstionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);