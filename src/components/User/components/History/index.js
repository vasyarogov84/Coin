import React from "react";
import { Line } from "react-chartjs-2";
import { Paper } from "@material-ui/core";

const History = ({ balance }) => {
  const state = {
    labels: ["January", "February", "March", "April", "Current"],
    datasets: [
      {
        label: "Balance",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, balance],
      },
    ],
  };

  return (
    <Paper style={{ display: "flex", flex: 1 }}>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Balance",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </Paper>
  );
};

export default History;
