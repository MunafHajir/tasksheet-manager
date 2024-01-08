import { reRender } from "Stores/Action/Action";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const dispatch = useDispatch();
  const { ProjectName } = useParams();
const navigate = useNavigate()
  const handleBack = () => {
    // dispatch(reRender(false));
    navigate(-1)
  };

  return (
    <>
      <h1>hello</h1>
      <h1>{ProjectName}</h1>
      <button onClick={handleBack}>back</button>
    </>
  );
};

export default ProjectDetail;
