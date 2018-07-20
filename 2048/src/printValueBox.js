// @flow

import React from 'react';

type Props = {
  value: number;
  id: number;
};
const styleDefault = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'center',
  'align-items': 'center',
  'font-size': '20px',
};
const style2 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#ece4db',
};
const style4 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#ebdfc8',
};
const style8 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#e6b282',
};
const style16 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#e6996d',
};
const style32 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#e68067',
};
const style64 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#e6684a',
};
const style128 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#e6cd80',
};
const style256 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#e6cd73',
};
const style512 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#e6c864',
};
const style1024 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#e6c55a',
};
const style2048 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#e6be50',
};
const style4096 = {
  width: '100px',
  height: '100px',
  margin: '10px',
  border: '1px solid black',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'font-size': '20px',
  'background-color': '#3d4434',
};

const textWhite = {
  color: 'white',
};

export default function ValueBox(props: Props) {
  let {value, id} = props;

  switch (value) {
    case 2:
      return (
        <div style={style2}>
          <span>{value}</span>
        </div>
      );
    case 4:
      return (
        <div style={style4}>
          <span>{value}</span>
        </div>
      );
    case 8:
      return (
        <div style={style8}>
          <span style={textWhite}>{value}</span>
        </div>
      );
    case 16:
      return (
        <div style={style16}>
          <span style={textWhite}>{value}</span>
        </div>
      );
    case 32:
      return (
        <div style={style32}>
          <span style={textWhite}>{value}</span>
        </div>
      );
    case 64:
      return (
        <div style={style64}>
          <span style={textWhite}>{value}</span>
        </div>
      );
    case 128:
      return (
        <div style={style128}>
          <span style={textWhite}>{value}</span>
        </div>
      );
    case 256:
      return (
        <div style={style256}>
          <span style={textWhite}>{value}</span>
        </div>
      );
    case 512:
      return (
        <div style={style512}>
          <span style={textWhite}>{value}</span>
        </div>
      );
    case 1024:
      return (
        <div style={style1024}>
          <span style={textWhite}>{value}</span>
        </div>
      );
    case 2048:
      return (
        <div style={style2048}>
          <span style={textWhite}>{value}</span>
        </div>
      );

    case 0:
      return (
        <div style={styleDefault}>
          <span />
        </div>
      );

    default:
      return (
        <div style={style4096}>
          <span style={textWhite}>{value}</span>
        </div>
      );
  }
}
