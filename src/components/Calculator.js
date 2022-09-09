import React, { useState } from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const clickHandler = (e) => {
    const buttonName = e.target.textContent;
    const myObj = calculate(state, buttonName);
    setState(myObj);
  };
  const { total, next, operation } = state;
  const op = operation === '%' ? '%' : operation;
  let result = '';
  if (total) {
    result = `${total} ${op || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${op || ''}`;
  }

  return (
    <div className="calculator">
      <div className="container">
        <div className="text-area">{result || 0 }</div>
        <div className="button-area">
          <div className="row">
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              AC
            </div>
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              +/-
            </div>
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              %
            </div>
            <div
              className="colored"
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              ÷
            </div>
          </div>
          <div className="row">
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              7
            </div>
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              8
            </div>
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              9
            </div>
            <div
              className="colored"
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              x
            </div>
          </div>
          <div className="row">
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              4
            </div>
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              5
            </div>
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              6
            </div>
            <div
              className="colored"
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              -
            </div>
          </div>
          <div className="row">
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              1
            </div>
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              2
            </div>
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              3
            </div>
            <div
              className="colored"
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              +
            </div>
          </div>
          <div className="row">
            <div
              className="zero"
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              0
            </div>
            <div
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              .
            </div>
            <div
              className="colored"
              onClick={clickHandler}
              onKeyPress={clickHandler}
              role="button"
              aria-hidden
            >
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
