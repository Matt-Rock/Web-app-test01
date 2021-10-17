import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [msg, setmsg] = useState("");
  const handleClick = async () => {
    const data = await fetch("/api");
    const json = await data.json();
    console.log(json.message);
    setmsg(json.message);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Dis bonjour</button>
      <h2>{msg}</h2>
    </div>
  );
};

export default App;
