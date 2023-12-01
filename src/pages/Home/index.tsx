import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import coffee from '../../assets/coffee.png';
import { ProductCard } from '../../components/ProductCard';
import { HighLightContainer, HomeContainer, IconContainer, ProductsContainer, TagsContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <HighLightContainer>
        <span>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>

          <TagsContainer>
            <div>
              <span>
                <IconContainer iconColor="yellow-dark">
                  <ShoppingCart size={16} weight='fill' />
                </IconContainer>
                <p>Compra simples e segura</p>
              </span>
              <span>
                <IconContainer iconColor="yellow">
                  <Package size={16} weight='fill' />
                </IconContainer>
                <p>Entrega rápida e rastreada</p>
              </span>
            </div>
            <div>
              <span>
                <IconContainer iconColor="base-text">
                  <Timer size={16} weight='fill' />
                </IconContainer>
                <p>Embalagem mantém o café intacto</p>
              </span>
              <span>
                <IconContainer iconColor="purple">
                  <Coffee size={16} weight='fill' />
                </IconContainer>
                <p>O café chega fresquinho até você</p>
              </span>
            </div>
          </TagsContainer>

        </span>
        <span>
          <img src={coffee} alt="" />
        </span>
      </HighLightContainer>
      <ProductsContainer>
        <ProductCard />
      </ProductsContainer>
    </HomeContainer>
  );
}