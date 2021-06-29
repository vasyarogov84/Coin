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

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  login: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  loginBody: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  typLogo: {
    textAlign: "center",
    margin: "100px 0px",
  },
  typWelcome: {
    padding: "30px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: 30,
  },
  typAddress: {
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 20,
    textTransform: "none",
  },
});

const Login = () => {
  const classes = useStyles();
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
    <div className={classes.login}>
      <div className={classes.loginBody}>
        <Typography color="textSecondary" className={classes.typLogo}>
          Logo
        </Typography>
        <Paper className={classes.paper}>
          <Typography color="textSecondary" className={classes.typWelcome}>
            Welcome! Sign In With Your Jobcoin Address.
          </Typography>
          <Divider />
          <div className={classes.form}>
            <Typography color="textSecondary" className={classes.typAddress}>
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
              className={classes.loginButton}
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
