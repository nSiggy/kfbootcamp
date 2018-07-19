// @flow

import React from 'react';

type Props = {
  item: Object,
  isSelected: boolean,
};

const imgStyle = {
  width: '50px',
  margin: '20px',
};

export default function PrintDetails(props: Props) {
  let {item, isSelected} = props;
  let path = item.imgPath ? item.imgPath : require('./img/default.jpg');
  console.log(path);

  if (isSelected) {
    return (
      <div>
        <img src={path} style={imgStyle} /> <b>{item.name}</b>
        <p>Phone Number: {item.phoneNumber}</p>
      </div>
    );
  } else return null;
}
