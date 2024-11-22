import { createSlice } from "@reduxjs/toolkit";
//import { modules } from "../../Database"; -- remove dependencies from database as we moved it to server

// create reducer's initial state with
// default modules copied from database
const initialState = {
  modules: [], //Empty the modules state variable since we'll be populating it with the modules we retrieve from the server using the findModulesForCourse function. 
};

//create slice
const modulesSlice = createSlice({


  
  name: "modules", //name the slice
  initialState, // set initial state
  reducers: { // declare reducer functions

    // Add a setModules reducer function so we can populate the modules state variable when we retrieve the modules from the server.
    setModules: (state, action) => {
      state.modules = action.payload;
    },


    addModule: (state, { payload: module }) => { // new module is in action.payload

      // now update modules in state adding new module
      const newModule: any = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule] as any;
    },

    // module's ID to delete is in action.payload
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((m: any) => m._id !== moduleId);// filter out module to delete
    },

    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    
  },
});
export const { addModule, deleteModule, updateModule, editModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;
