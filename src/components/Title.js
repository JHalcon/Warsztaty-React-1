import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: 'Default, very sad title. :( Please change it!'
    };
  }
  
  handleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  };
  
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Title;