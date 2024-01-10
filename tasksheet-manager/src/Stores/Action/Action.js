export const Action = {
  RERENDER: "RERENDER",
};

export const reRender = reRender => {
  return {
    type: Action.RERENDER,
    payload: reRender,
  };
};
