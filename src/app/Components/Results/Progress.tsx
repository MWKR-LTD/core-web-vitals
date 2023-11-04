'use client';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

interface ProgressProps {
  percentage: number
}

function Progress({percentage}: ProgressProps) {


  return (
    <CircularProgressbarWithChildren 
      value={percentage} 
      circleRatio={0.75} 
      styles={{
        root: {},
        path: {
          // Path color
          stroke: `#194CEE`,
          strokeLinecap: 'round',
          transition: 'stroke-dashoffset 0.5s ease 0s',
          // Rotate the path
          transform: 'rotate(0.625turn)',
          transformOrigin: 'center center',
          strokeWidth: 8,
        },
        trail: {
          stroke: '#194CEE1A',
          strokeLinecap: 'round',
          transform: 'rotate(0.625turn)',
          transformOrigin: 'center center',
          strokeWidth: 5
        },
      }}
    
    >
      <StyledProgressTextContainer>
        <StyledProgressText>{percentage}%</StyledProgressText>
        <StyledPassedText>passed</StyledPassedText>
      </StyledProgressTextContainer>
    </CircularProgressbarWithChildren>
  )
}

const StyledProgressTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledProgressText = styled.div`
  font-size: clamp(14px, 4dvw, 70px);
  line-height: clamp(16px, 4dvw, 72px);
  font-weight: 700;
`

const StyledPassedText = styled.div`
  font-size: clamp(10px, 2dvw, 40px);
  line-height: clamp(12px, 2dvw, 42px);
  font-weight: 500;
  text-transform: uppercase;
  color: #555555;
`

export default Progress