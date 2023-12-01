import styled from "styled-components"

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 16rem;
  max-height: 20rem;

  border-bottom-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  background-color: ${(props) => props.theme["base-card"]};
`
export const ProductImageContainer = styled.div`
  margin-top: -20px;
  padding-bottom: 0.75rem;
`

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding-bottom: 1rem;
`

export const Tags = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme["yellow-light"]};

  font-size: 0.625rem;
  color: ${(props) => props.theme["yellow-dark"]};
  font-weight: 700;
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2rem 1.25rem;

  strong {
    padding-bottom: 0.5rem;

    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    text-align: center;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-label"]};
  }
`

export const BuyContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.25rem;
  gap: 0.2rem;

  strong {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`

export const QuantityContainer = styled.div`
  background-color: ${(props) => props.theme["base-button"]};
`
