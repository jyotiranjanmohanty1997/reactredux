
import { combineReducers } from "redux";

import Basiclist from "./basicreducer";
import Contactlist from "./contactreducer";
import Edulist from "./edureducer";
import Explist from "./expreducer";

const Mainreducer = combineReducers({
    Basiclist, Contactlist, Edulist, Explist
});

export default Mainreducer;