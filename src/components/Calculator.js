import { Component } from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,

    };
  }

  clickHandler = (e) => {
    this.setState((obj) => calculate(obj, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="container">
          <div className="text-area">
            {
              total
            }
            {
              operation
            }
            {
              next
            }

          </div>
          <div className="button-area">
            <div className="row">
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>AC</div>
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>+/-</div>
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>%</div>
              <div className="colored" onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>÷</div>
            </div>
            <div className="row">
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>7</div>
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>8</div>
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>9</div>
              <div className="colored" onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>x</div>
            </div>
            <div className="row">
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>4</div>
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>5</div>
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>6</div>
              <div className="colored" onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>-</div>
            </div>
            <div className="row">
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>1</div>
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>2</div>
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>3</div>
              <div className="colored" onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>+</div>
            </div>
            <div className="row">
              <div className="zero" onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>0</div>
              <div onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden>.</div>
              <div className="colored" onClick={this.clickHandler} onKeyPress={this.clickHandler} role="button" aria-hidden> =</div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
export default Calculator;
