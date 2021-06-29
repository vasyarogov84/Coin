import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Divider,
  TextField,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    marginTop: 25,
  },
  typography: {
    margin: "10px 0px",
  },
  typSend: {
    textAlign: "center",
    margin: "10px 0px 20px 0px",
  },
  divSend: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  btn: {
    marginTop: 25,
    textTransform: "none",
  },
});

const Send = ({ user, setUserData, userData }) => {
  const classes = useStyles();
  const history = useHistory();
  const [transaction, setTransaction] = useState({
    fromAddress: user,
    toAddress: "",
    amount: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleTransaction = async () => {
    const result = await axios.post(
      "https://jobcoin.gemini.com/applicant-ominous/api/transactions",
      transaction
    );
    if (result?.status === 200)
      setUserData({
        ...userData,
        balance: userData.balance - transaction.amount,
      });
  };

  useEffect(() => {
    if (!user) history.push("/");
  }, []);

  const disabled = !transaction.amount || !transaction.toAddress;

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Typography color="textSecondary" className={classes.typSend}>
        Send Jobcoin
      </Typography>
      <Divider />
      <div className={classes.divSend}>
        <Typography color="textSecondary" className={classes.typography}>
          Destination Address
        </Typography>
        <TextField
          size="small"
          onChange={handleChange}
          name="toAddress"
          variant="outlined"
          color="secondary"
        />
        <Typography color="textSecondary" className={classes.typography}>
          Amount to Send
        </Typography>
        <TextField
          size="small"
          onChange={handleChange}
          name="amount"
          variant="outlined"
          color="secondary"
        />
        <Button
          disabled={disabled}
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={handleTransaction}
        >
          Send Jobcoins
        </Button>
      </div>
    </Paper>
  );
};

export default Send;
