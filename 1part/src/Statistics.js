import React from "react";
import StatisticLine from "./StatisticLine";


const Statistics = ({ statics }) => {
  if (statics.all === 0) {
    return <div>
      <h2>Statistics</h2>
      <p>No feedback given</p>
      </div>
  }
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={statics.good}/>
      <StatisticLine text="Neutral" value={statics.neutral}/>
      <StatisticLine text="Bad" value={statics.bad}/>
      <StatisticLine text="All" value={statics.all}/>
      <StatisticLine text="Average" value={statics.average.toFixed(2)}/>
      <StatisticLine text="Positive" value={`${(statics.positive * 100).toFixed(2)}%`}/>
  
    </div>
  );
};

export default Statistics;