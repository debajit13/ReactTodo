import { ADD_TODO, REMOVE_TODO } from "./action.types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]; // payload takes all the values that action is taking in this case its a string
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
