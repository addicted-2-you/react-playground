import React from "react";

import Ticker from "./Ticker";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tick: 0,
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState(({ tick }) => ({
        tick: tick + 1,
      }));
    }, 1000);
  }

  render() {
    const { tick } = this.state;

    return (
      <div className="h-screen flex justify-center items-center bg-purple-50">
        {tick % 5 ? <Ticker tick={tick} /> : null}
      </div>
    );
  }
}

export default App;
