import React from "react";

class Ticker extends React.Component {
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

    console.log("render Ticker");

    return (
      <div className="px-5 py-2 shadow-xl rounded-lg bg-white">
        <strong>{tick}</strong>
      </div>
    );
  }
}

export default React.memo(
  Ticker,
  (prevProps, nextProps) => prevProps.tick === nextProps.tick
);
