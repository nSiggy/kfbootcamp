// @flow

type ValueBoxesType = {
  id: number;
  value: number;
};

export type State = {
  valueBox: Array<ValueBoxesType>;
  previousState: Array<ValueBoxesType>;
};
