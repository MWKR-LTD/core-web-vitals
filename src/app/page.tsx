'use client';

import styled from 'styled-components';
import FormContainer from './Components/Form';

function Home() {
  return (
    <StyledHomeLayout>
      <FormContainer />
      <StyledImage src={'/form-image.jpeg'}/>
    </StyledHomeLayout>
  )
}

const StyledHomeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100dvh;

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
  }
`

const StyledImage = styled.img`
  height: 90dvh;
  width: 75%;
  object-fit: cover;
  border-radius: 0px 0px 0px 400px;
  margin-left: auto;

  @media only screen and (max-width: 800px) {
    height: 100%;
    width: 100%;
    margin-left: 0px;
    border-radius: 100px 0px 0px 0px;
  }
`

export default Home;