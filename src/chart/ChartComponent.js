import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import "../styles/chartcomponent.css";

const data = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30],
  [90, 50, 30, 40, 70, 60],
  [50, 20, 30, 20, 40, 80, 60],
  [20, 30, 30, 10],
  [40, 70, 20, 30, 50],
  [20, 70, 20, 40, 40, 60],
  [30, 10, 10, 20],
  [70, 90, 20, 40, 30],
  [70, 90, 20, 40, 30, 50, 10],
  [80, 10, 30, 20, 80],
  [30, 50, 40, 90, 100, 60],
  [60, 50, 20, 40, 10, 50, 70, 20],
  [40, 90, 10, 40],
  [50, 80, 20, 40, 30],
  [60, 50, 20, 40, 30, 50],
  [70, 40, 20, 40, 30, 60, 20],
  [80, 20, 20, 40, 60, 50, 30],
  [90, 60, 20, 40, 90, 50, 40, 100],
  [10, 80, 100, 30, 20, 50, 40, 60, 70],
  [90, 40, 80, 10, 20, 30, 60, 10, 40, 50],
  [70, 60, 60, 40, 90, 30, 50, 80, 110],
  [10, 30, 20, 40, 90, 50, 90, 10, 70],
  [20, 90, 40, 90, 50, 20, 90, 110, 30],
  [40, 50, 90, 50, 20, 40, 110, 60, 10, 60],
  [80, 70, 50, 20, 40, 90, 20, 70, 100],
  [60, 20, 110, 80, 30, 60, 80, 30, 70],
  [50, 100, 20, 40, 90, 50, 70, 50],
  [30, 60, 20, 40, 90, 50, 30, 40],
];

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  var i;

  useEffect(() => {
    changeData();
  }, []);

  const changeData = () => {
    i = Math.floor(Math.random() * 30);

    setChartData(data[i]);
  };
  return (
    <div className="chartcomponent">
      <h2 className="chartcomponent__heading">Simple Barchart using D3.js</h2>
      <button onClick={changeData} className="chartcomponent__button">
        Change Data
      </button>
      <BarChart width={600} height={400} data={chartData} />
    </div>
  );
};

export default ChartComponent;
