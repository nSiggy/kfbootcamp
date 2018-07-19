// @flow

import React from 'react';

type Props = {
  item: Object,
  isSelected: boolean,
};

const unselectedStyle = {
  backgroundColor: 'transparent',
  color: 'black',
  margin: '20px',
};
const selectedStyle = {
  backgroundColor: '#008000',
  color: 'white',
  margin: '20px',
};
const liStyle = {};

export default function PrintContacts(props: Props) {
  let {item, isSelected} = props;
  let style = isSelected ? selectedStyle : unselectedStyle;
  return <li style={style}>{item.name}</li>;
}
