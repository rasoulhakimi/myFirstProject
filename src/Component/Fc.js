import React ,{Component} from "react";
import propTypes from "prop-types";

class Fc extends Component {
  render() {
    let name = "rasoul";
    return (
     
      
    );
  }
}
  Fc.propTypes={
    name:propTypes.string.isRequired,
    iq:propTypes.number.isRequired
  }
  Fc.defaultProps={
    iq:50,
    name:'ramin'
  }

export default Fc;
