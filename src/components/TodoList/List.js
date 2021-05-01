import React from "react";
import styled from "styled-components/macro";

const Component = styled.div`
  padding: 1rem;
 
`;

const Item=styled.div`

  display: flex;
  align-items: center;

  &:not(:last-of-type){
    margin-bottom: 0.5rem;
  }

`
const buttonStyles = `
background: transparent;
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
 align-items: center;
justify-content: center;
paddin: 0;
font-size: 0.9rem;

&:focus{
  outline: 0;
}

&:hover{
  cursor: pointer;
  filter: brightness(105%);
}
`
const Completed=styled.button`

${buttonStyles};

border: ${props => props.completed ? 0 : '1px solid red'}

`
const Lable=styled.p`

margin: 0 0 0 0.5rem;
flex: 1;

&:hover{
  cursor pointer;
  color: #4a5568;
}

text-decoration: ${props => props.completed ? 'line-through' : 'none' };
color: ${props => props.completed ? 'green' : 'red'};
`
const Delete=styled.button`

${buttonStyles};

border: 0;
`
const NoItems=styled.p`

margin: 0;
text-align: center;
color: red;

`

const List = ({ items, onComplete, onDelete }) => (
  <Component>
    {items.map(({ id, completed, lable }) => (
      <Item key={id}>
        <Completed completed={completed} onClick={onComplete(id)}>
          {completed && 
          <span role='img' aria-label='complete'> ✅ 
          </span>}
        </Completed>

        <Lable completed={completed}>{lable}</Lable>

        <Delete onClick={onDelete(id)}>
          <span role='img' aria-label='delete'> ❌ 
          </span>
         </Delete>
      </Item>
    ))}
    {items.length===0 && <NoItems>No Items !</NoItems>}
  </Component>
);

export default List;
