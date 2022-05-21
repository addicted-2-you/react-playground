import React from "react";

class Ticker extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
    this.state = {};
  }

  componentDidMount(...args) {
    console.log("did mount", ...args);
  }

  componentDidUpdate(...args) {
    console.log("did update", ...args);
  }

  componentWillUnmount(...args) {
    console.log("will unmount", ...args);
  }

  render() {
    const { tick } = this.props;
    return (
      <div className="px-5 py-2 shadow-xl rounded-lg bg-white">
        <strong>{tick}</strong>
      </div>
    );
  }
}

export default Ticker;
