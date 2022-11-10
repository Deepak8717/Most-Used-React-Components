import { combineReducers } from "redux";
import todos from "./todos";
import VisibilityFilters from "./visibilityFilter";

export default combineReducers({
  todos,
  VisibilityFilters,
});
