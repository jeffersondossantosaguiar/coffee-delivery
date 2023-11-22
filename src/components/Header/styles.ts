import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};

      padding: 8px;
      border-radius: 6px;

      font-size: 0.75rem;
    }

    a:first-child {
      background-color: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};
      gap: 0.25rem;
    }
  }
`
