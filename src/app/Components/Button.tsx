'use client';

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";

interface ButtonProps {
  text?: string | undefined
  varient: 'orange' | 'blue'
  onClick?: Function | undefined
  type: "button" | "submit" | "reset" | undefined
}

interface StyledVarientProps {
  $varient?: 'orange' | 'blue'
}

function Button({text, varient, onClick, type}: ButtonProps) {
  return (
    <StyledButton $varient={varient} onClick={() => onClick?.()} type={type}>{text}<StyledFontAwesomeIcon icon={faCircleArrowRight}/></StyledButton>
  )
}

const StyledButton = styled.button<StyledVarientProps>`
  outline: none;
  border: none;
  width: 100%;
  height: 46px;
  border-radius: 30px;
  padding: 10px 30px;
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({$varient}) => $varient === 'blue' && `
    color: #273A79;
    border: 2px solid #273A79;
    background-color: transparent;
  `}

  ${({$varient}) => $varient === 'orange' && `
    background-color: #FF6B00;
    color: white;
  `}
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<StyledVarientProps>`

  ${({$varient}) => $varient === 'orange' && `
    color: white;
  `}

  ${({$varient}) => $varient === 'blue' && `
    color: #273A79;
  `}
`;

export default Button;