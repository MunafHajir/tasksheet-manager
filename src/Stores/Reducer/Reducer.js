  import { Action } from "Stores/Action/Action";

  const initalState = {
    reRendering: false,
    ActiveProject: "",
  };

  export const Reducer = (state = initalState, action) => {
    switch (action.type) {
      case Action.RERENDER:
        return {
          ...state,
          reRendering: action.payload,
        };
        case Action.ACTIVEPROJECT:
          return {
            ...state,
            ActiveProject: action.payload
          };
      default:
        return state;
    }
  };
