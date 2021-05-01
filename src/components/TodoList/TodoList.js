import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Filter from "./Filter";
import Input from "./Input";
import List from "./List";
import { v4 as uuidv4} from 'uuid';

const Wrapper= styled.div`
background-color: #fff;
border-radius: .375rem;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
min-width: 400px;
`

class TodoList extends Component {
  state = {
    mode: "all",
    items: [
      {
        id: 1,
        lable: "Make the <List /> component",
        completed: false,
      },
      {
        id: 2,
        lable: "Finish the todo list",
        completed: false,
      },
      {
        id: 3,
        lable: "Drink a cup of tea",
        completed: true,
      },
    ],
  }

  handleModeChange = (mode) => () => {
    this.setState({ mode })
  }

  handleComplete = (id) => () => {
    //make a new copy
    const newItem = [...this.state.items]

    //to get the same value when clicked on the paticular button
    //dont forogt to take the first item of the array
    const filteredItem = newItem.filter((item)=>item.id===id)[0]

    //true -> false,
    //false -> true
    filteredItem.completed= !filteredItem.completed

    this.setState({item: newItem})
  }

  handleDelete = (id) => () => {
    //the same filter as in handleComplete

    const filteredItems = this.state.items.filter(item => item.id !== id)

    //we need all the items expect the one we clicked delete
    //then just set state with that array

    this.setState({items: filteredItems})
  }

  handleTaskAdd = (value) =>{
    const task={
      id: uuidv4(),
      lable: value,
      completed: false
    }

    //copy all the items and put our task below
    const newItems = [...this.state.items, task];

    this.setState({items: newItems})
  }

  render() {
    const { mode, items } = this.state;

    let filteredItems =[]

    if(mode=== 'completed')
    {
      filteredItems = items.filter(item => item.completed === true)
    }
    else if(mode=== 'active'){
      filteredItems = items.filter(item => item.completed === false)
    }
    else{
      filteredItems =items
    }

    return (
      <Wrapper>
        <Filter mode={mode} onModeChange={this.handleModeChange} />
          <Input onTaskAdd={this.handleTaskAdd}/>
        <List items={filteredItems} 
        onComplete={this.handleComplete} 
        onDelete={this.handleDelete} />
      </Wrapper>
    );
  }
}
export default TodoList;