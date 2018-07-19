// @flow
import React from 'react';
import {RadioGroup, RadioItem} from './coreUI/RadioGroup';

function App(props: Object) {
  return (
    <div>
      <RadioGroup name="favColor">
        <RadioItem>Red</RadioItem>
        <RadioItem>Blue</RadioItem>
        <RadioItem>Green</RadioItem>
      </RadioGroup>
      <br />
      <RadioGroup name="favSport">
        <RadioItem>Badminton</RadioItem>
        <RadioItem>Soccer</RadioItem>
        <RadioItem>Basketball</RadioItem>
      </RadioGroup>
    </div>
  );
}

/*
  <div>
    <div><input name="favColor" type = radio" /> <span>red</span></div>
    <div><input name="favColor" type = radio" /> <span>red</span></div>
    <div><input name="favColor" type = radio" /> <span>red</span></div>
  </div>
*/
export default App;
