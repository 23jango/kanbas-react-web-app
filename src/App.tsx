import React from "react";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import store from "./Kanbas/store";
import { Provider } from "react-redux"; //import redux store provider
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <HashRouter>

      {/* wrap your application with the Provider so all child elements can read and write to the store */}
      <Provider store={store}>

        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>

    </HashRouter>
  );
}
export default App;