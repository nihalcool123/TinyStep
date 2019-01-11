import React from "react";

class PassForm extends React.Component {
  render() {
    return (
      <div>
        <h3> Minimum Temperature: {this.props.min_value} </h3>
        <h3>Maximum Temperature: {this.props.max_value}</h3>
      </div>
    );
  }
}

export default PassForm;
