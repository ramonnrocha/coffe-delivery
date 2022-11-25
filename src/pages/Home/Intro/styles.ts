import styled, { css } from "styled-components";

import introBackgroundImg from "../../../assets/background.png"

export const IntroContainer = styled.section`
  width: 100%;
  height: 54rem;
  background: ${() => `url(${introBackgroundImg})`}
`
export const IntroContent = styled.div`
  margin-top: 9rem;
  padding-inline: 16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5.4rem;
  flex-direction: row;
  img  {
    max-width: 47.6rem;
    max-height: 36rem;
  }

  h1 {
    font-size: 4.8rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 6.2rem;
    margin-bottom: 1.6rem;
    max-width: 58.8rem;
  }

  .title {
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    
    line-height: 3.2rem;
    
    max-width: 58.8rem;
  }

  .itens {
    margin-top: 6.6rem;
    display: flex;
    max-width: 56.7rem;
    flex-direction: column;
    gap: 2rem;
    
  }

  .itens-row {
    display: flex;
    max-width: 60rem;
    gap: 4rem;
    
  }
`

interface IconColorsProps {
  variant: "yellow" | "yellow-dark" | "purple" | "base-title"
}

export const ItemContainer = styled.div<IconColorsProps>`
  display: flex;
  max-width: 100%;
  gap: 1.2rem;
  font-size: 1.6rem;

  i {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    ${({ variant, theme }) => css`
      background: ${theme.colors[`brand-${variant}`]}
    `}
  }
`
