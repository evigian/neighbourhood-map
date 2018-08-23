import React from 'react';

// code based on: https://reactjs.org/docs/error-boundaries.html

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      
      this.setState({ hasError: true });
      
      console.log(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        
        return <h1>Something went wrong while loading Google maps. Please check the url or your network connection.</h1>;
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;