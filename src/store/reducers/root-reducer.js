import {combineReducers} from "redux";
import {appData} from "./app-data";
import {appProcess} from "./app-process";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.PROCESS]: appProcess,
});
