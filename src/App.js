import "./styles/app.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useState } from "react";
import ChartComponent from "./ChartComponent";

function App() {
  const [isChartOpen, setIsChartOpen] = useState(false);
  return (
    <div className="app">
      {isChartOpen ? (
        <ChartComponent />
      ) : (
        <>
          <LeftSide />
          <RightSide setIsChartOpen={setIsChartOpen} />
        </>
      )}
    </div>
  );
}

export default App;
