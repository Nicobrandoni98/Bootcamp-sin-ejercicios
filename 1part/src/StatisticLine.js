import React from "react";
import "./StatisticLine.css";

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <p className="text">
                {text}: 
              </p>
              <p className="number">{value}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticLine;