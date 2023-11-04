'use client';

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface ProgressBarProps {
  greenMax: number
  orangeMax: number
  redMax?: number
  score: number
}

interface StyledArrowProps {
  $percentage?: number
}

function ProgressBar({greenMax, orangeMax, redMax = 100, score}: ProgressBarProps) {

  function calculatePercentage(score:number, min:number, max:number) {
    let distance = max - min   
    if(max === 0) {
      max = score + min
      distance = max
    }    
    return (score - min) / distance * 100
  }

  function showArrow(percentage:number) {
    return (percentage < 100 && percentage > 0)
  }

  return (
    <StyledProgressBarContainer>
      <StyledGreenSector>
        {showArrow(calculatePercentage(score, 0, greenMax)) && 
          <StyledFontAwesomeIcon 
            icon={faArrowUp} 
            $percentage={calculatePercentage(score, 0, greenMax)} />
        }
      </StyledGreenSector>
      <StyledOrangeSector>
        {showArrow(calculatePercentage(score, greenMax, orangeMax)) && 
          <StyledFontAwesomeIcon 
            icon={faArrowUp} 
            $percentage={calculatePercentage(score, greenMax, orangeMax)} />
        }
      </StyledOrangeSector>
      <StyledRedSector>
        {showArrow(calculatePercentage(score, orangeMax, 0)) && 
          <StyledFontAwesomeIcon 
            icon={faArrowUp} 
            $percentage={calculatePercentage(score, orangeMax, 0)} />
        }
      </StyledRedSector>
    </StyledProgressBarContainer>
  )
}

const StyledProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-bottom: 10px;
`

const StyledGreenSector = styled.div`
  width: 75%;
  height: 2px;
  border-radius: 3px;
  background-color: #049B13;
  color: #049B13;
  position: relative;
`;

const StyledOrangeSector = styled.div`
  width: 20%;
  height: 2px;
  border-radius: 3px;
  background-color: #FF7A00;
  color: #FF7A00;
  position: relative;
`;

const StyledRedSector = styled.div`
  width: 5%;
  height: 2px;
  border-radius: 3px;
  background-color: #CC0000;
  color: #CC0000;
  position: relative;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<StyledArrowProps>`
    position: absolute;
    left: ${({$percentage}) => $percentage ?? 0}%;
    margin-top: 2px;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 1;
    color: inherit;
    font-size: 10px;
`;

export default ProgressBar;