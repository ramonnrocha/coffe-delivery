import { DivContainer, HeaderContainer } from "./styles."

import logo from "../../assets/logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <DivContainer>
        <button className="location">
          <MapPin size={22} weight="fill" />

          Porto Alegre, RS
        </button>
        <button className="cart">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </DivContainer>
    </HeaderContainer>
  )
}