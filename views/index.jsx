import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList data = {this.props.data}/>
                <TodoForm />
            </div>
        );
    }
}
    
class TodoList extends React.Component {
  render() {
    var todo = this.props.data.map(function(obj) {
      return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
    
    return (
      <div className="todoList">
        <table style={style.tableContent}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
}


var Todo = React.createClass({
  getInitialState() {
    return {checked: false, style: style.notCheckedTodo};
  },

  handleChange(e) {
    this.setState({checked: e.target.checked, style: e.target.checked ? style.checkedTodo : style.notCheckedTodo});
  },

  render() {
    console.log("this.state.style");
    console.log(this.state.style);
    return (
        <tr style={this.state.style}>
            <td style={{border: "1px solid black"}}>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
            </td>
            <td style={{border: "1px solid black"}}>{this.props.title}</td>
            <td style={{border: "1px solid black"}}>{this.props.children}</td>
        </tr>
    );
  }
})

Todo.propTypes = {
  title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
  // Write code here
  render() {
		return (
			<div className="todoForm">
				I am a TodoForm.
			</div>	
		);
	}
}

let style = {
  checkedTodo: {
      textDecoration: "line-through"
  },
  notCheckedTodo: {
      textDecoration: "none"
  },
  tableContent: {
      border: "2px solid black"
  }
};