import React from "react";
import IdleTimerContainer from "./components/IdleContainer";

const App = () => {
  return (
    <div>
      <IdleTimerContainer>
        <h2>
          Welcome user , to cek user activity .. please check is console ...
        </h2>
        <p>detect active after 5 second idle</p>
      </IdleTimerContainer>
    </div>
  );
};

export default App;
