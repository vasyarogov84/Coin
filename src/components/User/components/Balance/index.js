import React from "react";
import { Paper, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  typLabel: {
    margin: "15px 0px",
  },
  typBalance: {
    margin: "40px 0px",
  },
});
const Balance = ({ balance }) => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Typography color="textSecondary" className={classes.typLabel}>
        Jobcoin Balance
      </Typography>
      <Divider />
      <Typography color="textSecondary" className={classes.typBalance}>
        {balance}
      </Typography>
    </Paper>
  );
};

export default Balance;
