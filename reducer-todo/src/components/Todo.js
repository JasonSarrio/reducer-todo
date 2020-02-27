import React from 'react';

class Todo extends React.Component {
  

  props;

  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
        <div onDoubleClick={(e) => {this.props.setCompleted(this.props.task.id)}}>
          <p>{this.props.task.item}{this.completed}</p>
      </div>
    );
  }
}

export default Todo;