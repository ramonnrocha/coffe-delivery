import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10.4rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16rem;

  img {
    max-width: 8.4rem;
    max-height: 4rem;
  }
`

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  gap: 1.2rem;

  .location {
    width: 14.3rem;
    height: 3.8rem;
    text-decoration: none;
    border: none;
    border-radius: 8px;
    display:flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors["brand-purple-light"]};
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
    cursor: pointer;
    transition: background 0.3s;

    :hover {
      background: ${({ theme }) => theme.colors["brand-purple"]};
      color: ${({ theme }) => theme.colors["brand-purple-light"]};
    }
  };

  .cart{
    width: 3.8rem;
    height: 3.8rem;
    border:none;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow"]};
    cursor: pointer;
    transition: background 0.3s;

    :hover {
      background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
      color: ${({ theme }) => theme.colors["brand-yellow-light"]};
    }
  }
`