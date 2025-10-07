import { Component } from "react";

function withCounter(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          extraProps={{
            txt: "This component is wrapped by withCounter.",
            type: "success",
          }}
        />
      );
    }
  };
}

export default withCounter;
