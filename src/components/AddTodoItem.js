import React, { Component } from 'react';

class AddToDoItem extends Component {

    state = {
        title: ""
    }


    titleChanged = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }


    addTodoItem = () => {
        this.props.addToDo(this.state.title);
        this.setState({
            title: ""
        })
    }

    render() {
        return (
            <div className="input-group mb-5 px-1">
                <input type="text"
                    name="title"
                    className="form-control" placeholder="Todo Description" aria-label="Todo" aria-describedby="button-addon2"
                    value={this.state.title}
                    onChange={this.titleChanged}
                />
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" id="button-addon2" onClick={this.addTodoItem}>  Add  </button>
                </div>
            </div>
        )
    }
}

export default AddToDoItem;