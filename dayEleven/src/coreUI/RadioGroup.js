//@flow

import React, {Children} from 'react';

type GroupProps = {
  name: string;
  children?: Array<React$Element<*>>;
};

export function RadioGroup(props: GroupProps) {
  let {name, children, ...otherProps} = props;
  return (
    <div {...otherProps}>
      {Children.map(children, (child, i) => {
        return (
          <div key={i} {...otherProps}>
            <input name={name} type="radio" />
            <span>{child}</span>
          </div>
        );
      })}
    </div>
  );
}

type ItemProps = {
  children?: Array<React$Element<*>>;
};

export function RadioItem(props: ItemProps) {
  let {children, ...otherProps} = props;
  return <span {...otherProps}>{children}</span>;
}
