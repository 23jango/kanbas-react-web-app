import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { UseSelector } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

import { setModules,addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  
  const [moduleName, setModuleName] = useState("");

  const { modules } = useSelector((state: any) => state.modulesReducer);

  const dispatch = useDispatch();

  //Use the new updateModule client function to update the module in the server. If successful, dispatch the updated module to the reducer to update the module in the modules state variable as well.
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };


  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
    //Use the new deleteModule client function to remove the module from the server. If successful, dispatch the deleted module's ID to the reducer to remove the module from the modules state variable as well.
  };



  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule); //uses the createmoduleforcourse client function to send the module to the server and then dispatches the created module to the reducer so it's added to the reducer's modules state variable.
    dispatch(addModule(module));
  };


  //invoke findmodulesforcourse client function and dispatch the modules from the server to the reducer with setModules
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);


  //to check if role is faculty to hide buttons or not
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div className="wd-modules">
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={createModuleForCourse}
      // addModule={() => {
      //   dispatch(addModule({ name: moduleName, course: cid }));
      //   setModuleName("");
      // }}
       /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          // .filter((module: any) => module.course === cid) -modules r already filtered through fetchModule above
          .map((module: any) => (

            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />

                {/* section below is to check if edit is engaged, if so, then show editing screen and if not then hide */}
                {!module.editing && module.name}
                {module.editing && (
                  <input className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name} />
                )}


                {isFaculty && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => removeModule(moduleId)} //updated the deleteModule attribute to use the new removeModule event handler
                    editModule={(moduleId) => dispatch(editModule(moduleId))} />
                )}
              </div>

              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}

                      {isFaculty && (
                        <ModuleControlButtons
                          moduleId={module._id}
                          deleteModule={(moduleId) => removeModule(moduleId)}
                          editModule={(moduleId) => dispatch(editModule(moduleId))} />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
