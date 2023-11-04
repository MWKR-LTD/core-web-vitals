'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components'

interface SelectProps {
  placeholder?: string | undefined
  options?: Array<OptionProps> | undefined
  value?: string | undefined
  label?: string | undefined
  required?: boolean | undefined
  disabled?: boolean | undefined
  onChange?: Function | undefined
}

interface OptionProps {
  id: string
  name: string
}

function Select({placeholder, options, value: initialValue, label, required = true, disabled, onChange}: SelectProps) {

  const [value, setValue] = useState<string>('')

  useEffect(() => {
    setValue(initialValue ?? '')
  }, [initialValue])

  function triggerOnChange(event:any) {
    onChange?.(event)
    setValue(event?.target?.value)
  }

  return (
    <StyledSelectWrapper>
      <StyledSelectLabel>{label} {!required && <span>(Optional)</span>}</StyledSelectLabel>
      <StyledSelect
        onChange={triggerOnChange}
        defaultValue={value ?? ''}
        required={required}
        disabled={disabled}
      >
        <Option value={''} disabled>{placeholder}</Option>
        {!!options?.length && options?.map?.((option: OptionProps, optionIndex: number) => {
          return <Option key={optionIndex} value={option?.id}>{option?.name}</Option>
        })}
      </StyledSelect>
    </StyledSelectWrapper>
  )
}

const StyledSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const StyledSelectLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;

  span {
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`

const StyledSelect = styled.select`
  width: 100%;
  height: 46px;
  border: 1px solid #EBE9E9;
  border-radius: 5px;
  padding: 10px;
  color: #555;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5
  }
`

const Option = styled.option``

export default Select;