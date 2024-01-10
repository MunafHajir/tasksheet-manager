  import { Action } from "Stores/Action/Action";

  const initalState = {
    reRendering: false,
  };

  export const Reducer = (state = initalState, action) => {
    switch (action.type) {
      case Action.RERENDER:
        return {
          ...state,
          reRendering: action.payload,
        };

      default:
        return state;
    }
  };
