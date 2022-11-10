let nextTodo = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodo++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleToDo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_AL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
