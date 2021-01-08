import React from "react";
import { connect } from "react-redux";

import * as actionCreators from "../actions/index";
import Box from "./box";
import Inputpanel from "./inputPanel";

//Values passed from Reducers
class BoxCon extends React.Component {
  render() {
    return (
      <>
        <Box result={this.props.result} />
        <Inputpanel click={this.props.getRecipe} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(BoxCon); //Connecting Redux with React
