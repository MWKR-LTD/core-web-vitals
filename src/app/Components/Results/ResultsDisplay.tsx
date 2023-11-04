'use client';

import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";

interface ResultsDisplayProps {
  lcp?: number,
  fid?: number,
  cls?: number,
  location?: string
}

function ResultsDisplay({lcp, fid, cls, location}: ResultsDisplayProps) {

  const [screenWidth, setScreenWidth] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()
  }, [])

  function handleWindowResize() {
    setScreenWidth(window?.innerWidth)
  }

  return (
    <StyledResultsDisplayContainer>
      <StyledLocationContainer>
        <StyledLocationContentContainer>
          <StyledLocationTitle>&nbsp;</StyledLocationTitle>
          <StyledLocationTitle><StyledBox>&nbsp;</StyledBox>{location}</StyledLocationTitle>
        </StyledLocationContentContainer>
      </StyledLocationContainer>
      <StyledDataContainer>
        <StyledDataContentContainer>
          <StyledDataTitle>
            {screenWidth > 700 ? 'Average ': ''}LCP
          </StyledDataTitle>
          <StyledValueContainer>
            <StyledDataValue>
              {lcp ? (lcp / 100)?.toFixed(1) : 0}s
            </StyledDataValue>
            <ProgressBar greenMax={2.5} orangeMax={4} score={lcp ?? 0}/>
          </StyledValueContainer>
        </StyledDataContentContainer>
      </StyledDataContainer>
      <StyledDataContainer>
        <StyledDataContentContainer>
          <StyledDataTitle>
            {screenWidth > 700 ? 'Average ': ''}FID
          </StyledDataTitle>
          <StyledValueContainer>
            <StyledDataValue>
              {fid && fid?.toFixed(1)}ms
            </StyledDataValue>
            <ProgressBar greenMax={100} orangeMax={300} score={fid ?? 0}/>
          </StyledValueContainer>
        </StyledDataContentContainer>
      </StyledDataContainer>
      <StyledDataContainer>
        <StyledDataContentContainer>
          <StyledDataTitle>
            {screenWidth > 700 ? 'Average ': ''}CLS
          </StyledDataTitle>
          <StyledValueContainer>
            <StyledDataValue>
              {cls && cls}
            </StyledDataValue>
            <ProgressBar greenMax={0.1} orangeMax={0.25} score={cls ?? 0}/>
          </StyledValueContainer>
        </StyledDataContentContainer>
      </StyledDataContainer>
    </StyledResultsDisplayContainer>
  )
}

const StyledResultsDisplayContainer = styled.div`
  width: clamp(290px, 80dvw, 1100px);
  padding: 30px 40px;
  background-color: #FFF;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: clamp(10px, 2dvw, 90px);
  box-sizing: border-box;

  @media only screen and (max-width: 1000px) {
    padding: 20px 25px;
  }

  @media only screen and (max-width: 700px) {
    padding: 15px 20px;
    flex-direction: column;
    min-width: 290px;
    gap: 0px;
  }
`

const StyledLocationContainer = styled.div`
  width: clamp(150px, 100%, 220px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #EDEDED;
  height: 100%;

  @media only screen and (max-width: 700px) {
    max-width: 100%;
    width: 100%;
  }
`;

const StyledLocationContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media only screen and (max-width: 700px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 0px;
    padding-bottom: 10px;
  }
`

const StyledLocationTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledBox = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 3px;
  margin-right: 10px;
  background-color: #194CEE;
`

const StyledDataContainer = styled.div`
  width: clamp(75px, 100%, 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 700px) {
    max-width: 100%;
    width: 100%;
  }
`;

const StyledDataContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  text-align: left;

  @media only screen and (max-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
  }
`

const StyledDataTitle = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-bottom: 1px solid #EDEDED;
  font-weight: 700;
  font-size: clamp(16px, 2dvw, 18px);
  line-height: clamp(26px, 2dvw, 28px);

  @media only screen and (max-width: 700px) {
    border-bottom: none;
    padding-bottom: 0px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const StyledValueContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-bottom: 1px solid #EDEDED;

  @media only screen and (max-width: 700px) {
    border-bottom: none;
    padding-bottom: 0px;
    padding: 5px;
  }
`

const StyledDataValue = styled.span`
  width: 100%;
  color: #555555;
  font-weight: 700;
  font-size: clamp(20px, 2dvw, 32px);
  line-height: clamp(30px, 2dvw, 42px);

  @media only screen and (max-width: 700px) {
    border-bottom: none;
    padding-bottom: 0px;
  }
`

export default ResultsDisplay;