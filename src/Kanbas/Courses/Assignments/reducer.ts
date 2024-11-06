import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

// create reducer's initial state with
// default assignments copied from database
const initialState = {
  assignments: assignments,
  addUpdate: false,
};

//create slice
const assignmentSlice = createSlice({

  name: "assignments", //name the slice
  initialState, // set initial state
  reducers: { // declare reducer functions

    //updates for assignment editor
    toggleAddUpdate: (state, { payload: addUpdate })  => {
      state.addUpdate = addUpdate;
    },

    // now update assignments in state adding new assignemnt
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        group: assignment.group,
        submissionType: assignment.submissionType,
        dueDate: assignment.dueDate,
        availableFrom: assignment.startDate,
        availableUntil: assignment.endDate,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    // assignment's ID to delete is in action.payload
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);// filter out assignment to delete
    },

    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      );
    },

    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? { ...assignment, editing: false } : a
      );
    },

  }

});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, toggleAddUpdate } =
  assignmentSlice.actions;
export default assignmentSlice.reducer;
