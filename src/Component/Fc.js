import React ,{Component} from "react";
class Fc extends Component {
  render() {
    let name = "rasoul";
    return (
      <div>
        {
          this.props.avg >15 &&
          <h1>hi dear {name} avg {this.props.avg} is {this.props.lname}</h1>}
          {
            this.props.avg<15 &&
                  <h1> avg less than 15 is {this.props.lname}</h1>

          }

        
        
      </div>
    );
  }
}
export default Fc;
