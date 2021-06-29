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

const Send = ({ user, setUserData, userData }) => {
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

  const disabled = !transaction.amount && !transaction.toAddress;
  return (
    <Paper
      variant="outlined"
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 25,
      }}
    >
      <Typography
        color="textSecondary"
        style={{ textAlign: "center", margin: "10px 0px 20px 0px " }}
      >
        Send Jobcoin
      </Typography>
      <Divider />
      <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
        <Typography color="textSecondary" style={{ margin: "10px 0px" }}>
          Destination Address
        </Typography>
        <TextField
          size="small"
          onChange={handleChange}
          name="toAddress"
          variant="outlined"
          color="secondary"
        />
        <Typography color="textSecondary" style={{ margin: "10px 0px" }}>
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
          style={{ marginTop: 25, textTransform: "none" }}
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

Send.defaultProps = {};

export default Send;
