'use client';

import styled from "styled-components";
import ResultsContainer from "../Components/Results";

function Results() {
  return (
    <StyledResultsLayout>
      <ResultsContainer />
    </StyledResultsLayout>
  )
}

const StyledResultsLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100%;
`



export default Results