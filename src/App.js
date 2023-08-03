import React, { useEffect, useState } from "react";

// Importing app.css is css file to add styling
import "./App.css";

const App = () => {
  //Cronometer
  const [diff, setDiff] = useState(null);
  const [initial, setInitial] = useState(null);

  const tick = () => {
    setDiff(new Date(+new Date() - initial));
  };

  const start = () => {
    setInitial(+new Date());
  };
  useEffect(() => {
    if (initial) {
      requestAnimationFrame(tick);
    }
  }, [initial]);

  useEffect(() => {
    if (diff) {
      requestAnimationFrame(tick);
    }
  }, [diff]);

  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);
  // Function is called everytime increment button is clicked
  // const handleClick1 = () => {
  //   // Counter state is incremented
  //   setCounter(counter + 1)
  // }

  // // Function is called everytime decrement button is clicked
  // const handleClick2 = () => {
  //   // Counter state is decremented
  //   setCounter(counter - 1)
  // }
  const handleClick = (isIncrement) => {
    var val = parseInt(counter);
    if (isIncrement) {
      val = val + 1;
    } else {
      if (counter > 0)
      {val = val - 1;}
    }
    // LocalStorage saved
    window.localStorage.setItem("counter", val);
    setCounter(val);
  };

  ///Render in the page
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      Welcom to counter app!
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
        }}
      >
        {counter}
      </div>
      <div>
        <button className="buttonsG" onClick={() => handleClick(true)}>
          Increment
        </button>
        <button className="buttonsR" onClick={() => handleClick(false)}>
          Decrement
        </button>
      </div>
      <div className="txtValue">
        <h1>Último registro: {localStorage.getItem("counter")}</h1>
      </div>
      <div className="App" onClick={start}>
        <h1 className="timer">{timeFormat(diff)}</h1>
      </div>
    </div>
  );
};
const timeFormat = (date) => {
  if (!date) return "00:00:00";
  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();
  let cm = Math.round(date.getMilliseconds() / 10);
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  cm = cm < 10 ? "0" + cm : cm;
  return `${mm}:${ss}:${cm}`;
};

export default App;
