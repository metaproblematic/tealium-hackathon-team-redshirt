import React, { Component } from "react";
import Chart from "react-google-charts";
import Data from "./Data";
class BarChart extends Component {
  state = {
  
  };


  render() {
    return (
      <Chart
        className="chartStyle"
        width={"800px"}
        height={"600px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          [
            "Attributes",
            "Average Value for Big Spenders",
            "Average Value for Non Big Spenders"
          ],
          ["Purchase Value", 1000, 400],
          ["Value Per Visit", 1170, 460],
          ["Lifetime Total Value", 660, 1120],
          ["Lifetime Purchases", 1030, 540]
        ]}
        options={{
          // Material design options
          chart: {
            title:
              "Purchase Value Comparison Between Big Spenders and Non Big Spenders",
            subtitle:
              "Comparison between Frequent Buyer and Average Across Same Segment"
          }
        }}
        // For tests
        rootProps={{ "data-testid": "2" }}
      />
    );
  }
}
export default BarChart;