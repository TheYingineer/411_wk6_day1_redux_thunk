import { connect } from "react-redux";
import Import from "../components/Import";
import { removemakes, fetchmakes } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    makes: state.makes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchmakes: (makes) => dispatch(fetchmakes(makes)),
    removemakes: (index) => dispatch(removemakes(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import);
