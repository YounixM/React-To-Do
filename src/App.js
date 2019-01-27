import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddToDoItem from './components/AddTodoItem';
import AboutUs from "./components/pages/About";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   desc: "Learn React",
      //   completed: false
      // },
      // {
      //   id: 2,
      //   desc: "Learn React Native",
      //   completed: false
      // },
      // {
      //   id: 3,
      //   desc: "Learn Python",
      //   completed: true
      // }
    ]
  };

  completeTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      res => {
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)]
        })
      }
    )
  }

  addTodoItem = (title) => {
    let newTodo = {
      title: title,
      completed: false
    }

    axios.post("https://jsonplaceholder.typicode.com/todos", newTodo).then(
      res => {
        this.setState({
          todos: [res.data, ...this.state.todos]
        });
      }
    )
  }


  render() {
    return (

      <Router>
        <div className="App container my-5">
          <Header />

          <Route exact path="/" render={props => (
            <React.Fragment>
              <div style={todoContainer}>
                <div className="pb-5" style={todoList}>
                  <AddToDoItem addToDo={this.addTodoItem}>  </AddToDoItem>
                  <Todos todos={this.state.todos} markComplete={this.completeTodo} deleteTodo={this.deleteTodo} />
                </div>
              </div>
            </React.Fragment>
          )} />

          <Route path="/about" component={AboutUs} />

        </div>

      </Router>
    );
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      res => {
        console.log("res", res.data);
        this.setState({
          todos: res.data
        })
      }
    )
  }
}

const todoContainer = {
  // display: "flex",
  // justifyContent: "center"
}

const todoList = {
  width: "60%",
  left: "20%",
  position: "absolute"
}

export default App;
