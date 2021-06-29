import React from "react";
import { Paper, Divider } from "@material-ui/core";

const Balance = ({ balance }) => {
  return (
    <Paper
      elevation={1}
      square
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <p>Jobcoin Balance</p>
      <Divider />
      <p>{balance}</p>
    </Paper>
  );
};

Balance.defaultProps = {
  balance: 0,
};

export default Balance;
