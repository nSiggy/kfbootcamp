// @flow
import type {State} from './types/State';

type UpdateFunction = (state: State, data: ?mixed) => State;
type EventHandlerObject = {[eventName: string]: UpdateFunction};

let eventHandlers: EventHandlerObject = {
  toggleDone: (oldState, id) => {
    let newTodoItems = oldState.todoItems.map((item) => {
      if (item.id === id) {
        return {...item, isDone: !item.isDone};
      } else {
        return item;
      }
    });
    return {...oldState, todoItems: newTodoItems};
  },
};

export default eventHandlers;
