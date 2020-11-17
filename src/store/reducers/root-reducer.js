import {combineReducers} from "redux";
import {appData} from "./app-data";
import {appProcess} from "./app-process";
import {user} from "./user";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.PROCESS]: appProcess,
  [NameSpace.USER]: user,
});
