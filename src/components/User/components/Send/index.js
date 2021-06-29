import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Divider, TextField, Paper, Button } from "@material-ui/core";

const Send = ({ user }) => {
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
      "http://jobcoin.gemini.com/applicant-ominous/api/transactions",
      transaction
    );
    console.log(
      "🚀 ~ file: index.js ~ line 24 ~ handleTransaction ~ result",
      result
    );
  };

  useEffect(() => {
    if (!user) history.push("/");
  }, []);

  const disabled = !transaction.amount && !transaction.toAddress;
  return (
    <Paper
      elevation={1}
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 25,
        textAlign: "center",
      }}
    >
      <p>Send Jobcoin</p>
      <Divider />
      <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
        <label>Destination Address</label>
        <TextField
          onChange={handleChange}
          name="toAddress"
          variant="outlined"
          color="secondary"
        />
        <label>Amount to Send</label>
        <TextField
          onChange={handleChange}
          name="amount"
          variant="outlined"
          color="secondary"
        />
        <Button
          disabled={disabled}
          style={{ marginTop: 25 }}
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
