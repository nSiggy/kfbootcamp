// @flow
import React, {Component} from 'react';
import type {State} from './types/types';
import ValueBox from './printValueBox';

type Props = {};

class App extends Component<Props, State> {
  state = {
    valueBox: [
      {id: 0, value: 2},
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
      {id: 5, value: 2},
      {id: 6, value: 0},
      {id: 7, value: 0},
      {id: 8, value: 0},
      {id: 9, value: 0},
      {id: 10, value: 2},
      {id: 11, value: 0},
      {id: 12, value: 0},
      {id: 13, value: 0},
      {id: 14, value: 0},
      {id: 15, value: 2},
    ],
    previousState: [
      {id: 0, value: 0},
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
      {id: 5, value: 0},
      {id: 6, value: 0},
      {id: 7, value: 0},
      {id: 8, value: 0},
      {id: 9, value: 0},
      {id: 10, value: 0},
      {id: 11, value: 0},
      {id: 12, value: 0},
      {id: 13, value: 0},
      {id: 14, value: 0},
      {id: 15, value: 0},
    ],
  };

  componentDidMount() {
    document.addEventListener('keyup', this._onKeyUp);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this._onKeyUp);
  }

  _onKeyUp = (event: KeyboardEvent) => {
    console.log(event.key);
    let newState = this.state.valueBox.length;
    if (event.key === 'ArrowUp') {
      for (let i = 4; i < valueBox.length; i++) {
        let movementCoordinate = i;
        movementCoordinate -= 4;
      }
      this.setState({valueBox: newState});
    }
  };
  /*
  _onKeyUp = (event: KeyboardEvent) => {
    let {valueBox, previousState} = this.state;

    previousState = valueBox;

    if (event.key === 'ArrowUp') {
      for (let i = 4; i < valueBox.length; i++) {
        let movementCoordinate = i;
        movementCoordinate -= 4;

        while (movementCoordinate > 0) {
          if (valueBox[movementCoordinate].value !== 0) {
            valueBox[movementCoordinate].value = valueBox[i].value;
            valueBox[i].value = 0;
            console.log(i + valueBox[i].value);
          }
        }
      }
    }

    if (event.key === 'ArrowDown') {
      console.log(event.key);
    }
  };*/

  render() {
    let box = (val: Array<Object>) => {
      return (
        <tr>
          {val.map((value, index) => {
            return (
              <td>
                <ValueBox key={value.id} value={value.value} id={value.id} />
              </td>
            );
          })}
        </tr>
      );
    };

    return (
      <div>
        <table>
          {[
            box(this.state.valueBox.slice(0, 4)),
            box(this.state.valueBox.slice(4, 8)),
            box(this.state.valueBox.slice(8, 12)),
            box(this.state.valueBox.slice(12, 16)),
          ]}
        </table>
      </div>
    );
  }
}

export default App;
