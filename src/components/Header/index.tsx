import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <NavLink to="/" title='Home'>
          <img src={logo} alt="" />
        </NavLink>
      </span>
      <nav>
        <NavLink to="" title="Cart">
          <MapPin size={22} weight='fill' />
          <p>Sorocaba, SP</p>
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight='fill' />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}