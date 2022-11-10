import { VisibilityFilters } from "./actions";

const VisibilityFilters = (state = visibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default VisibilityFilters;
