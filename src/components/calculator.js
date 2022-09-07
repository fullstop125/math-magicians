const { Component } = require('react');

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="container">
          <div className="text-area">0</div>
          <div className="button-area">
            <div className="row">
              <div>AC</div>
              <div>+/-</div>
              <div>%</div>
              <div className="colored">÷</div>
            </div>
            <div className="row">
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div className="colored">x</div>
            </div>
            <div className="row">
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div className="colored">-</div>
            </div>
            <div className="row">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div className="colored">+</div>
            </div>
            <div className="row">
              <div className="zero">0</div>
              <div>.</div>
              <div className="colored"> =</div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
export default Calculator;
