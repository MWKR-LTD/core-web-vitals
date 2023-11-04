'use client';

import styled from "styled-components";

function Description() {
  return (
    <StyledDescription>See how the Core Web Analytics across sectors compare</StyledDescription>
  )
}

const StyledDescription = styled.h4`
  font-weight: 700;
  font-size: clamp(18px, 4dvw, 22px);
  line-height: clamp(26px, 4dvw, 32px);
  width: 100%;
  color: #273a79;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export default Description;