// @flow

import React, {Component} from 'react';
import type {State, ValueBoxesType} from './types/types';
import ValueBox from './printValueBox';

type Props = {};

class App extends Component<Props, State> {
  state = {
    valueBox: [
      {id: 0, value: 2, hasMerged: false},
      {id: 1, value: 2, hasMerged: false},
      {id: 2, value: 4, hasMerged: false},
      {id: 3, value: 8, hasMerged: false},
      {id: 4, value: 128, hasMerged: false},
      {id: 5, value: 64, hasMerged: false},
      {id: 6, value: 32, hasMerged: false},
      {id: 7, value: 16, hasMerged: false},
      {id: 8, value: 256, hasMerged: false},
      {id: 9, value: 512, hasMerged: false},
      {id: 10, value: 1024, hasMerged: false},
      {id: 11, value: 2048, hasMerged: false},
      {id: 12, value: 32768, hasMerged: false},
      {id: 13, value: 16384, hasMerged: false},
      {id: 14, value: 8192, hasMerged: false},
      {id: 15, value: 4096, hasMerged: false},
    ],
    previousState: [
      {id: 0, value: 0, hasMerged: false},
      {id: 1, value: 0, hasMerged: false},
      {id: 2, value: 0, hasMerged: false},
      {id: 3, value: 4, hasMerged: false},
      {id: 4, value: 0, hasMerged: false},
      {id: 5, value: 0, hasMerged: false},
      {id: 6, value: 0, hasMerged: false},
      {id: 7, value: 0, hasMerged: false},
      {id: 8, value: 0, hasMerged: false},
      {id: 9, value: 0, hasMerged: false},
      {id: 10, value: 0, hasMerged: false},
      {id: 11, value: 0, hasMerged: false},
      {id: 12, value: 0, hasMerged: false},
      {id: 13, value: 0, hasMerged: false},
      {id: 14, value: 0, hasMerged: false},
      {id: 15, value: 0, hasMerged: false},
    ],
  };

  componentDidMount() {
    document.addEventListener('keyup', this._onKeyUp);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this._onKeyUp);
  }

  _resetMergeStat(mergeState: Array<ValueBoxesType>) {
    for (let items of mergeState) {
      items.hasMerged = false;
    }
    return mergeState;
  }

  _moveUp() {
    let newState = this.state.valueBox;

    for (let i = 4; i < newState.length; i++) {
      let movementCoordinate = i;
      let currentCoordinate = i;

      while (currentCoordinate > 3 && newState[currentCoordinate].value > 0) {
        movementCoordinate -= 4;

        if (newState[movementCoordinate].value === 0) {
          newState[movementCoordinate].value =
            newState[currentCoordinate].value;
          newState[currentCoordinate].value = 0;
        } else if (
          newState[movementCoordinate].value ===
            newState[currentCoordinate].value &&
          newState[movementCoordinate].hasMerged === false
        ) {
          newState[movementCoordinate].value +=
            newState[currentCoordinate].value;
          newState[currentCoordinate].value = 0;
          newState[movementCoordinate].hasMerged = true;
          movementCoordinate = -1;
        }

        currentCoordinate = movementCoordinate;
      }
    }

    newState = this._resetMergeStat(newState);
    this.setState({valueBox: newState});
  }

  _moveDown() {
    let newState = this.state.valueBox;

    for (let i = newState.length - 5; i >= 0; i--) {
      let movementCoordinate = i;
      let currentCoordinate = i;

      while (currentCoordinate < 12 && newState[currentCoordinate].value > 0) {
        movementCoordinate += 4;

        if (newState[movementCoordinate].value === 0) {
          newState[movementCoordinate].value =
            newState[currentCoordinate].value;
          newState[currentCoordinate].value = 0;
        } else if (
          newState[movementCoordinate].value ===
            newState[currentCoordinate].value &&
          newState[movementCoordinate].hasMerged === false
        ) {
          newState[movementCoordinate].value +=
            newState[currentCoordinate].value;
          newState[currentCoordinate].value = 0;
          newState[movementCoordinate].hasMerged = true;
          movementCoordinate = 999;
        }

        currentCoordinate = movementCoordinate;
      }
    }
    newState = this._resetMergeStat(newState);
    this.setState({valueBox: newState});
  }

  _moveRight() {
    let newState = this.state.valueBox;
    for (let row = 0; row < 4; row++) {
      for (let i = 2 + row * 4; i >= row * 4; i--) {
        let currentCoordinate = i;
        let movementCoordinate = i;

        while (
          currentCoordinate < 3 + row * 4 &&
          newState[currentCoordinate].value > 0
        ) {
          movementCoordinate += 1;

          if (newState[movementCoordinate].value === 0) {
            newState[movementCoordinate].value =
              newState[currentCoordinate].value;
            newState[currentCoordinate].value = 0;
          } else if (
            newState[movementCoordinate].value ===
              newState[currentCoordinate].value &&
            newState[movementCoordinate].hasMerged === false
          ) {
            newState[movementCoordinate].value +=
              newState[currentCoordinate].value;
            newState[currentCoordinate].value = 0;
            newState[movementCoordinate].hasMerged = true;
            movementCoordinate = 999;
          }

          currentCoordinate = movementCoordinate;
        }
      }
    }
    newState = this._resetMergeStat(newState);
    this.setState({valueBox: newState});
  }

  _moveLeft() {
    let newState = this.state.valueBox;

    for (let row = 0; row < 4; row++) {
      for (let i = 1 + row * 4; i < 4 + row * 4; i++) {
        let currentCoordinate = i;
        let movementCoordinate = i;

        while (
          currentCoordinate > row * 4 &&
          newState[currentCoordinate].value > 0
        ) {
          movementCoordinate -= 1;

          if (newState[movementCoordinate].value === 0) {
            newState[movementCoordinate].value =
              newState[currentCoordinate].value;
            newState[currentCoordinate].value = 0;
          } else if (
            newState[movementCoordinate].value ===
              newState[currentCoordinate].value &&
            newState[movementCoordinate].hasMerged === false
          ) {
            newState[movementCoordinate].value +=
              newState[currentCoordinate].value;
            newState[currentCoordinate].value = 0;
            newState[movementCoordinate].hasMerged = true;
            movementCoordinate = -1;
          }

          currentCoordinate = movementCoordinate;
        }
      }
      newState = this._resetMergeStat(newState);
      this.setState({valueBox: newState});
    }
  }

  _assignPreviousState() {
    let currentValueBox: Array<ValueBoxesType> = this.state.valueBox;
    let oldState: Array<ValueBoxesType> = [];

    for (let i = 0; i < currentValueBox.length; i++) {
      oldState.push(Object.assign({}, currentValueBox[i]));
    }

    this.setState({previousState: oldState});
  }

  _compareStates() {
    for (let i = 0; i < this.state.valueBox.length; i++) {
      if (this.state.valueBox[i].value !== this.state.previousState[i].value) {
        return false;
      }
    }
    return true;
  }

  _onKeyUp = (event: KeyboardEvent) => {
    console.log(event.key);

    if (event.key === ' ') {
      this.setState({valueBox: this.state.previousState});
      console.log('reverting');
    }

    if (!this._compareStates()) {
      console.log('calling to save state by compareStates');
      this._assignPreviousState();
    }

    if (event.key === 's') {
      console.log('calling to save state');
      this._assignPreviousState();
    }

    this._assignPreviousState();

    if (event.key === 'd') {
      console.log(this.state.previousState);
    }

    if (event.key === 'ArrowUp') {
      this._moveUp();
    }

    if (event.key === 'ArrowDown') {
      this._moveDown();
    }

    if (event.key === 'ArrowRight') {
      this._moveRight();
    }

    if (event.key === 'ArrowLeft') {
      this._moveLeft();
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
