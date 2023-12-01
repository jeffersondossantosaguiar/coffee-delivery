import styled from "styled-components"

export const HomeContainer = styled.main`
  flex: 1;
`

export const HighLightContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  height: 34rem;

  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  h3 {
    padding-top: 1rem;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 2.5rem;

  padding-top: 4.125rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};

  span {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.75rem;
  }

  span:not(:first-child) {
    padding-top: 1.25rem;
  }
`

interface IconContainerProps {
  iconColor?: string
}

export const IconContainer = styled.span<IconContainerProps>`
  padding: 0.5rem;
  border-radius: 50%;

  color: ${(props) => props.theme["background"]};
  background-color: ${(props) => props.theme[`${props.iconColor}`]};
`
export const ProductsContainer = styled.div``
