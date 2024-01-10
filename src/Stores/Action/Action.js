export const Action = {
  RERENDER: "RERENDER",
  ACTIVEPROJECT: "ACTIVE_Project",
};

export const reRender = (reRender) => {
  return {
    type: Action.RERENDER,
    payload: reRender,
  };
};
export const ActiveProject = (projectName) => {
  return {
    type: Action.ACTIVEPROJECT,
    payload: projectName,
  };
};
