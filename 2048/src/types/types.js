// @flow

export type ValueBoxesType = {
  id: number;
  value: number;
  hasMerged: boolean;
};

export type State = {
  valueBox: Array<ValueBoxesType>;
  previousState: Array<ValueBoxesType>;
};
