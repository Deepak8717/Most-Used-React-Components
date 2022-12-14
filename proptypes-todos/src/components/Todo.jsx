import PropTypes from "prop-types";

const Todo = ({ onclick, completed, text }) => {
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </li>;
};

Todo.prototypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
