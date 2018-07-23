// @flow

import React, {Component} from 'react';
import type {State, ValueBoxesType} from './types/types';
import ValueBox from './printValueBox';

type Props = {};

class App extends Component<Props, State> {
  state = {
    valueBox: [
      {id: 0, value: 0, hasMerged: false},
      {id: 1, value: 0, hasMerged: false},
      {id: 2, value: 0, hasMerged: false},
      {id: 3, value: 0, hasMerged: false},
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
    previousState: [
      {id: 0, value: 0, hasMerged: false},
      {id: 1, value: 0, hasMerged: false},
      {id: 2, value: 0, hasMerged: false},
      {id: 3, value: 0, hasMerged: false},
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

  _getValueForCurrentStateBeforeMoving(): Array<ValueBoxesType> {
    let currentValueBox: Array<ValueBoxesType> = this.state.valueBox;
    let oldState: Array<ValueBoxesType> = [];

    for (let i = 0; i < currentValueBox.length; i++) {
      oldState.push(Object.assign({}, currentValueBox[i]));
    }
    return oldState;
  }

  _spawnRandomValues() {
    let spawnValue;
    let spawnPos: number = 0;

    let currentValueBox = this.state.valueBox;

    if (Math.random() < 0.9) {
      spawnValue = 2;
    } else {
      spawnValue = 4;
    }

    let randomValue = Math.random();

    if (randomValue < 0.06) {
      spawnPos = 0;
    } else if (randomValue < 0.12) {
      spawnPos = 1;
    } else if (randomValue < 0.18) {
      spawnPos = 2;
    } else if (randomValue < 0.24) {
      spawnPos = 3;
    } else if (randomValue < 0.3) {
      spawnPos = 4;
    } else if (randomValue < 0.36) {
      spawnPos = 5;
    } else if (randomValue < 0.42) {
      spawnPos = 6;
    } else if (randomValue < 0.48) {
      spawnPos = 7;
    } else if (randomValue < 0.54) {
      spawnPos = 8;
    } else if (randomValue < 0.6) {
      spawnPos = 9;
    } else if (randomValue < 0.66) {
      spawnPos = 10;
    } else if (randomValue < 0.72) {
      spawnPos = 11;
    } else if (randomValue < 0.78) {
      spawnPos = 12;
    } else if (randomValue < 0.84) {
      spawnPos = 13;
    } else if (randomValue < 0.9) {
      spawnPos = 14;
    } else if (randomValue < 0.96) {
      spawnPos = 15;
    } else {
      console.log('lorem ipsum');
    }

    if (currentValueBox[spawnPos].value === 0) {
      currentValueBox[spawnPos].value = spawnValue;
    } else {
      for (let i = 0; i < currentValueBox.length; i++) {
        if (currentValueBox[i].value === 0) {
          this._spawnRandomValues();
          return;
        }
      }
      return;
    }
  }

  _assignPreviousState() {
    let currentValueBox: Array<ValueBoxesType> = this.state.valueBox;
    let oldState: Array<ValueBoxesType> = [];

    for (let i = 0; i < currentValueBox.length; i++) {
      oldState.push(Object.assign({}, currentValueBox[i]));
    }
    console.log('saving');
    this.setState({previousState: oldState});
  }

  _compareStates(comparatorValue: Array<ValueBoxesType>) {
    console.log(comparatorValue[0].value);
    for (let i = 0; i < comparatorValue.length; i++) {
      // console.log(
      //   'comparing ' +
      //     i +
      //     ' --- ' +
      //     comparatorValue[i].value +
      //     ' <-> ' +
      //     this.state.valueBox[i].value,
      // );
      if (comparatorValue[i].value != this.state.valueBox[i].value) {
        this._spawnRandomValues();
        this.setState({previousState: comparatorValue});
        console.log('saving');
        break;
      }
    }
  }

  _isCurrentStateEmpty() {
    for (let i = 0; i < this.state.valueBox.length; i++) {
      if (this.state.valueBox[i].value !== 0) {
        return false;
      }
    }
    return true;
  }
  _onKeyUp = (event: KeyboardEvent) => {
    console.log(event.key);

    let comparatorValue = this._getValueForCurrentStateBeforeMoving();

    if (this._isCurrentStateEmpty()) {
      this._spawnRandomValues();
      this.setState();
    }

    if (event.key === ' ') {
      this.setState({valueBox: this.state.previousState});
      console.log('reverting');
    }

    if (event.key === 's') {
      console.log('calling to save state');
      this._assignPreviousState();
    }

    if (event.key === 'd') {
      this._spawnRandomValues();
    }

    if (event.key === 'ArrowUp') {
      this._moveUp();
      this._compareStates(comparatorValue);
      //this._spawnRandomValues();
    }

    if (event.key === 'ArrowDown') {
      this._moveDown();
      this._compareStates(comparatorValue);
      //this._spawnRandomValues();
    }

    if (event.key === 'ArrowRight') {
      this._moveRight();
      this._compareStates(comparatorValue);
      //this._spawnRandomValues();
    }

    if (event.key === 'ArrowLeft') {
      this._moveLeft();
      this._compareStates(comparatorValue);
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
