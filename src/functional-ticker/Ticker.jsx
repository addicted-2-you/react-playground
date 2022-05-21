import React from "react";

function Ticker(props) {
  const { tick } = props;

  console.log("render Ticker", tick);

  return (
    <div className="px-5 py-2 shadow-xl rounded-lg bg-white">
      <strong>{tick}</strong>
    </div>
  );
}

export default Ticker;
// export default React.memo(Ticker, (prev, next) => prev.tick === next.tick);
