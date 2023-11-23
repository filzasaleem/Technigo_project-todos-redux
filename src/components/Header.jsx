import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";

import { openModal, openProjectModal } from "../reducers/modelSlice";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="logo">
        <i className="glyphicon glyphicon-menu-hamburger text-big"></i>
        <h1 className="text-big">TODO APP</h1>
      </div>
      <div className="button">
      <button onClick={() => dispatch(openProjectModal())} className="addProject">ADD Project</button>
        <button onClick={() => dispatch(openModal())} className="addTask">ADD TASK</button>
       
      </div>
    </div>
  );
};
