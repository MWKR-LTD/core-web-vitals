'use client';

import styled from "styled-components";
import Title from "./Title";
import Progress from "./Progress";
import ResultsDisplay from "./ResultsDisplay";
import Button from "../Button";
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import axios from "axios";
import { CWV } from "@/app/models/CWV";



// Style 'Restaurants, Coventry' within results display

function ResultsContainer() {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const [cwv, setCwv] = useState<CWV>()
  const [displayLocation, setDisplayLocation] = useState<string>('')
  const [lcp, setLcp] = useState<number>(0)
  const [fid, setFid] = useState<number>(0)
  const [cls, setCls] = useState<number>(0)

  const location = searchParams?.get?.('location')
  const sector = searchParams?.get?.('sector')

  useEffect(() => {
    getCWV()
  }, [])

  async function getCWV() {
    await axios.get<CWV>(`https://cwv-api.eotwdb.co.uk/api/aggregate/mobile?locations=${location}&sectors=${sector}`)?.then((response) => {
      setCwv(response?.data)
    })  
  }

  useEffect(() => {
    setDisplayLocation(`${cwv?.sectors?.[0]?.name}, ${cwv?.locations?.[0]?.name}`)
    setLcp(cwv?.vitals_averages?.lcp ?? 0)
    setFid(cwv?.vitals_averages?.fid ?? 0)
    setCls(cwv?.vitals_averages?.cls ?? 0)
  }, [cwv])

  function triggerRestart() {
    push?.('/')
  }


  return (
    <StyledResultsContainer>
      <StyledTopContainer>
        <Title />
        <StyledTopContentContainer>
          <StyledProgressContainer>
            <Progress percentage={Math.floor(Number(cwv?.all_good?.percentage))}/> 
          </StyledProgressContainer>
          <StyledTopLocation>{displayLocation}</StyledTopLocation>
        </StyledTopContentContainer>
      </StyledTopContainer>
      <ResultsDisplay lcp={lcp} fid={fid} cls={cls} location={displayLocation}/>
      <StyledButtonContainer>
        <Button text="Restart" type="button" varient={'blue'} onClick={triggerRestart}/>
      </StyledButtonContainer>
    </StyledResultsContainer>
  )
}

const StyledResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: clamp(340px, 100dvw, 1100px);
  height: auto;
  gap: 60px;
`

const StyledTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  text-align: center;

  @media only screen and (max-width: 500px) {
    gap: 15px;
  }
`

const StyledTopContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 500px) {
    flex-direction: row;
    border-bottom: 1px solid #EDEDED;
    border-top: 1px solid #EDEDED;
    padding: 10px 0px;
    gap: 10px
  }
`

const StyledTopLocation = styled.div`
  font-size: clamp(16px, 4dvw, 18px);
  line-height: clamp(26px, 4dvw, 28px);
`

const StyledProgressContainer = styled.div`
  height: clamp(45px, 22dvw, 270px);
  width: clamp(55px, 22dvw, 300px);
`

const StyledButtonContainer = styled.div`
  width: fit-content;

  @media only screen and (max-width: 500px) {
    width: 100%;
    padding: 0px 15px;
    box-sizing: border-box;
  }
`

export default ResultsContainer;