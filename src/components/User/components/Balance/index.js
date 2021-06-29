import React from "react";
import { Paper, Divider, Typography } from "@material-ui/core";

const Balance = ({ balance }) => {
  return (
    <Paper
      variant="outlined"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography color="textSecondary" style={{ margin: "15px 0px" }}>
        Jobcoin Balance
      </Typography>
      <Divider />
      <Typography color="textSecondary" style={{ margin: "40px 0px" }}>
        {balance}
      </Typography>
    </Paper>
  );
};

Balance.defaultProps = {
  balance: 0,
};

export default Balance;
