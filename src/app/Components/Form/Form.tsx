'use client';

import styled from "styled-components";
import Select from "./Select";
import Button from "../Button";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Category } from "@/app/models/Category";
import { Sector } from "@/app/models/Sector";
import { Location } from "@/app/models/Location";
import { useRouter } from 'next/navigation';

function Form() {
  const { push } = useRouter();

  const [categories, setCategories] = useState<Category[]>([])
  const [sectors, setSectors] = useState<Sector[]>([])
  const [locations, setLocations] = useState<Location[]>([])

  const [category, setCategory] = useState<string>('')
  const [sector, setSector] = useState<string>('')
  const [location, setLocation] = useState<string>('')

  useEffect(() => {
    getLocations()
    getCategories()
  }, [])

  async function getCategories() {
    await axios.get('https://cwv-api.eotwdb.co.uk/api/categories/')?.then((response: {data: Category[]}) => {
      setCategories(response?.data)
    })  
  }

  async function getSectors(id: string) {
    if(!id) {
      return
    }
    await axios.get(`https://cwv-api.eotwdb.co.uk/api/categories/${id}/sectors`)?.then((response: {data: Sector[]}) => {
      setSectors(response?.data)
    }) 
  }

  async function getLocations() {
    await axios.get('https://cwv-api.eotwdb.co.uk/api/locations')?.then((response: {data: Location[]}) => {
      setLocations(response?.data)
    })  
  }

  useEffect(() => {
    getSectors(category)
  }, [category])

  function triggerSubmit(e:any) {
    e.preventDefault();
    push(`/results?location=${location}&sector=${sector ? sector : category}`)
  }


  return (
    <StyledForm onSubmit={triggerSubmit}>
      <Select 
        label="Choose a category" 
        placeholder="Accommodation" 
        options={categories} 
        onChange={(e:any) => setCategory(e?.target?.value)}/>      
      <Select 
        label="Choose a sector" 
        required={false} 
        placeholder="All Accommodation" 
        options={sectors ?? []} 
        onChange={(e:any) => setSector(e?.target?.value)} 
        disabled={!!!category}/>
      <Select 
        label="Choose a location" 
        placeholder="West Midlands" 
        options={locations} 
        onChange={(e:any) => setLocation(e?.target?.value)}/>
      <Button type="submit" varient="orange" text="Next" />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 2px 7px 0px #00000026;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 800px) {
    padding: 10px;
    gap: 12px;
  }
`

export default Form;