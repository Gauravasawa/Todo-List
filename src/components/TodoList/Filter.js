import React from 'react';
import styled from 'styled-components/macro';

const Component = styled.div`
border-bottom : 1px solid #ccc;
display: flex;
`
const Button = styled.button`
  background-color: ${(props) => (props.selected ? "#edf2f7" : "#fff")};
  border: 0;
  flex: 1;
  font-weight: ${(props) => (props.selected ? 500 : 400)};
  padding: 0.75rem;

  transition: all 0.25s ease-in-out;

  &:first-of-type {
    border-radius: 0.375rem 0 0 0;
    border-right: 1px solid #e2e8f0;
  }

  &:last-of-type {
    border-radius: 0 0.375rem 0 0;
    border-left: 1px solid #e2e8f0;
  }

  &:focus{
      outline: 0;
  }

  &:hover{
      cursor: pointer;
      background-color: #e2e8f0;
  }
`

const buttons = [
  {
    value: "all",
    lable: "All",
  },
  {
    value: "active",
    lable: "Active",
  },
  {
    value: "completed",
    lable: "Completed",
  },
]


const Filter = ({mode , onModeChange}) => (
  <Component>
    {buttons.map((button) => (
     <Button 
     key={button.value} 
     onClick={onModeChange(button.value)}
     selected={mode===button.value}
     >
       {button.lable}
       </Button>
    ))}
  </Component>
);


export default Filter;