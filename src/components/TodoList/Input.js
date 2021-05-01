import React, { Component } from 'react';
import styled from "styled-components/macro";


const Wrapper =styled.div`
border-bottom: 1px solid #e2e8f0;
display: flex;
`

const StyledInput = styled.input`
width: 100%;
padding: 1rem;
border: 0;

&:focus{
outline: 0;
}
`

const Button = styled.button`
border: 0;
border-left: 1px solid e2e8f0;
background-color: lightgreen;
color: #fff;
padding: 0.5rem 1.5rem;
transition: all 0.25s ease-in-out;

&:focus{
  outline: 0;
}

&:hover{
  cursor: pointer;
  background-color: green;
}
`


class Input extends Component {
  state = {
    value: '',
    edit: false
  }

  handleChange = (event) => {
    //get the value of input
    const inputValue = event.target.value

    //set the state
    this.setState({ value: inputValue })

    //check if we are editing or not
    if(inputValue === ''){
      this.setState({edit: false})
    }
    else{
      this.setState({ edit: true })
    }
  }

  handleKeyPress= event =>{
//if we hit enter while typing inside our input
if(event.key === 'Enter'){
  this.handleSubmit()
}
  }

  handleSubmit=()=>{
    //handle addition of task/item/todolist/ you call it
    this.props.onTaskAdd(this.state.value)

    //clean the input
    this.setState({valur:'', edit: 'false'})
  }

  render() {
    return (
      <Wrapper>
        <StyledInput
          type='text'
          placeholder='Add Items'
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        {this.state.edit && 
        <Button onClick={this.handleSubmit}>
          ADD
        </Button>}
      </Wrapper>
    )
  }
}

export default Input;
