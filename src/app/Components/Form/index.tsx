'use client';

import styled from "styled-components";
import Title from "./Title";
import Description from "./Description";
import Form from "./Form";

function FormContainer() {
  return (
    <StyledFormContainer>
      <Title />
      <Description />
      <Form />
    </StyledFormContainer>
  )
}

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: left;
  max-width: 680px;
  margin-left: auto;
  padding-left: 25px;
  box-sizing: border-box;

  @media only screen and (max-width: 800px) {
    max-width: 100%;
    margin-top: 30px;
    padding: 0px 15px;
  }
`

export default FormContainer;