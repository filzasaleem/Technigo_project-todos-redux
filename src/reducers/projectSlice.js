// Example from instructions pasted below

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    projectList: [
      {
        projectName: "December month project",
        createdDate: 1700729781222,
        isDone: true,
        tasks: [
          {
            createdDate: 7700729781605,
            name: "Watch video on actions & reducers",
            comment: "Do it properly",
            deadline: "",
            category: "house",
            isDone: true,
          },
          {
            createdDate: 9000729871043,
            name: "Follow redux code along",
            comment: "Do it properly",
            deadline: "",
            category: "garden",
            isDone: true,
          },
        ],
      },
      {
        projectName: "January project",
        createdDate: 1700729788800,
        isDone: false,
        tasks: [
          {
            createdDate: 1705729783000,
            name: "Implement authentication",
            comment: "Secure the application",
            deadline: "",
            category: "office",
            isDone: false,
          },
          {
            createdDate: 1700729984000,
            name: "Design landing page",
            comment: "Create an attractive landing page",
            deadline: "",
            category: "design",
            isDone: false,
          },
        ],
      },
      {
        projectName: "Spring cleanup",
        createdDate: 1700999785000,
        isDone: false,
        tasks: [
          {
            createdDate: 1400729786000,
            name: "Clean the garage",
            comment: "Dispose of unnecessary items",
            deadline: "",
            category: "house",
            isDone: false,
          },
          {
            createdDate: 1700726787000,
            name: "Prune the garden",
            comment: "Get the garden ready for spring",
            deadline: "",
            category: "garden",
            isDone: false,
          },
        ],
      },
      {
        projectName: "Summer vacation planning",
        createdDate: 1700119788000,
        isDone: false,
        tasks: [
          {
            createdDate: 1730729789000,
            name: "Book flights",
            comment: "Find the best deals",
            deadline: "",
            category: "travel",
            isDone: false,
          },
          {
            createdDate: 1722729790000,
            name: "Research accommodation",
            comment: "Look for comfortable stay options",
            deadline: "",
            category: "travel",
            isDone: false,
          },
        ],
      },
    ],
  };
  
  export const projects = createSlice({
    name: "projects",
    initialState,
    reducers: {
      addProject: (state, action) => {
        state.projectList.push(action.payload);
      },
  
      removeProject: (state, action) => {
        const filteredList = state.projectList.filter(
          (project) => project.createdDate !== action.payload
        );
        state.projectList = filteredList;
      },
      
      removeProjectTask: (state, action) => {
        const { projectId, taskId } = action.payload;
  
        state.projectList = state.projectList.map((project) => {
          if (project.createdDate === projectId) {
            const updatedTasks = project.tasks.filter(
              (task) => task.createdDate !== taskId
            );
  
            return {
              ...project,
              tasks: updatedTasks,
            };
          }
          return project;
        });
      },
    },
  });
  
  export const { addProject, removeProject, removeProjectTask } = projects.actions;
  
