'use client';

import styled from "styled-components";

function Title() {
  return (
    <StyledTitle>View & Compare Data across Sectors & Locations</StyledTitle>
  )
}

const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: clamp(28px, 4dvw, 48px); 
  line-height: clamp(36px, 4dvw, 58px);
  width: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export default Title;