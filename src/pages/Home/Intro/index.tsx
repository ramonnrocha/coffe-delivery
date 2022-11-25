import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IntroContainer, IntroContent, ItemContainer } from "./styles";

import imageIntro from "../../../assets/image-background.svg"

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <div>
          <section>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p className="title">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </section>
          <div className="itens">
            <div className="itens-row">
            <ItemContainer variant="yellow-dark">
              <i>
              <ShoppingCart size={22} weight='fill' />
              </i>
              <p>Compra simples e segura</p>
            </ItemContainer>
            <ItemContainer variant="base-title">
             <i>
              <Package  size={22} weight='fill'/>
              </i>
              <p> Embalagem mantém o café intacto</p>
            </ItemContainer>
            </div>
            <div className="itens-row">
            <ItemContainer variant="yellow">
              <i>
              <Timer size={22} weight='fill'/>
              </i>
              <p>Entrega rápida e rastreada</p>
            </ItemContainer>
            <ItemContainer variant="purple">
              <i>
              <Coffee size={22} weight='fill'/>
              </i>
              <p>O café chega fresquinho até você</p>
            </ItemContainer>
            </div>
          </div>
        </div>
        <img src={imageIntro} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}