import React from 'react';
  
export  class HelloWorld extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  render() {
    
    return (
      <div className="App">
        <p>hello</p>
      </div>
    );
  }
}
