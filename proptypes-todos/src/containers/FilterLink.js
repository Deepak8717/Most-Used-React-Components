import { connect, Connect } from "react-redux";
import { setVisibilityFilter } from "../actions";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.setVisibilityFilter,
});

const mapDispatchToProps = (state, ownProps) => ({
  onclick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
