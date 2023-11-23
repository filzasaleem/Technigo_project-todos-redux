import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isProjectOpen:false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    openProjectModal: (state) => {
      state.isProjectOpen = true;
    },
    closeProjectModal: (state) => {
      state.isProjectOpen = false;
    },
  },
});

export const { openModal, closeModal ,openProjectModal,closeProjectModal} = modalSlice.actions;

export default modalSlice.reducer;