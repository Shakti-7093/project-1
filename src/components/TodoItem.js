import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        // if(this.props.todo.completed){
        //     return {
        //         backgroundColor: '#f4f4f4',
        //         color: 'red'
        //     }
        // }
        return {
            backgroundColor: '#f4f4f4',
            color: 'blue',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // markCompleted(e) {
    //     console.log(this.props);
    // }

  render() {
    const { id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind( this, id )}/>{' '}
            { title }
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}></button>
        </p>
      </div>
    )
  }
};

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4',
//     color: 'gray'
// };

const btnStyle = {
    backgroundColor: "#ff0000",
    color: '#fff',
    border: 'none',
    padding: '9px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;