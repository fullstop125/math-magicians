import './style.css';
import Calculator from './components/calculator';

const { Component } = require('react');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;
