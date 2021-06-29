import React, { useState, useContext, useEffect } from "react";
import {
  Divider,
  TextField,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { signIn, user } = useContext(UserContext);
  const [customer, setCustomer] = useState(null);
  const history = useHistory();

  const handleUserLogin = (event) => {
    event.preventDefault();
    if (customer) {
      signIn(customer);
    }
  };

  const handleChange = (event) => {
    setCustomer(event.target.value);
  };

  useEffect(() => {
    if (user) {
      history.push("/user");
    }
  }, [user]);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        border: "3px solid green",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center", margin: "100px 0px" }}>Logo</h2>
        <Paper
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            color="textSecondary"
            style={{ padding: "30px", textAlign: "center" }}
          >
            Welcome! Sign In With Your Jobcoin Address.
          </Typography>
          <Divider />
          <div
            style={{ display: "flex", flexDirection: "column", padding: 30 }}
          >
            <Typography color="textSecondary" style={{ marginBottom: 10 }}>
              Jobcoin address:
            </Typography>
            <TextField
              size="small"
              onChange={handleChange}
              variant="outlined"
              color="secondary"
            />
            <Button
              disabled={!customer}
              variant="contained"
              color="primary"
              onClick={handleUserLogin}
              style={{ marginTop: 20, textTransform: "none" }}
            >
              Sign In
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
