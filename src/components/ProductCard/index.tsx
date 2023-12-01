import traditional from '../../assets/coffees/traditonal.png';
import { BuyContainer, PriceContainer, ProductCardContainer, ProductImageContainer, ProductInfoContainer, QuantityContainer, Tags, TagsContainer } from './styles';

export function ProductCard() {
  return (
    <ProductCardContainer>
      <ProductImageContainer>
        <img src={traditional} alt="" />
      </ProductImageContainer>
      <TagsContainer>
        <Tags>TRADICIONAL</Tags>
        <Tags>COM LEITE</Tags>
      </TagsContainer>
      <ProductInfoContainer>
        <strong>Expresso Tradicional</strong>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </ProductInfoContainer>
      <BuyContainer>
        <PriceContainer>
          <p>R$</p>
          <strong>9,90</strong>
        </PriceContainer>
        <span>
          <QuantityContainer>
            <span>-</span>
            <input type="text" value={1} />
            <span>+</span>
          </QuantityContainer>
          <span>Cart</span>
        </span>
      </BuyContainer>
    </ProductCardContainer>
  );
}