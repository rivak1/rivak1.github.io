import './App.css';
import React from 'react';
import Preloader from './Resume/Common/preloader';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      preload:true,
    }
  }

  componentDidMount() {
    this.setState({
      preload:false,
    })
  }

  render(){
    return (
      <Preloader />
    );
  }

}


export default App;
