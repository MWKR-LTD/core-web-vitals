'use client';

import styled from "styled-components";

function Title() {
  return (
    <StyledTitle>Core Web Vitals Assessment</StyledTitle>
  )
}

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: clamp(24px, 5dvw, 36px); 
  line-height: clamp(34px, 5dvw, 42px);
  width: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export default Title;