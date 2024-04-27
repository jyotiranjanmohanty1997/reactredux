
import { HashRouter,Routes, Route, Link } from "react-router-dom";

import Navheader from "./header";
import Basic from "./basic";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Viewall from "./viewall";

function App() {
  return (
    <HashRouter>
      <Navheader/>
      <Routes>
        <Route exact path="/basic" element={<Basic/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/education" element={<Education/>}/>
        <Route exact path="/experience" element={<Experience/>}/>
        <Route exact path="/viewall" element={<Viewall/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
