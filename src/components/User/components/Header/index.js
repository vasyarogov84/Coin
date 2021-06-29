import React from "react";
import FaceIcon from "@material-ui/icons/Face";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useHistory } from "react-router-dom";
import { Button, Typography, Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px 10px",
  },
  typography: {
    marginLeft: 15,
  },
  btn: {
    marginLeft: 15,
    color: "blue",
    textTransform: "none",
  },
});

const Header = ({ logOut }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleSignOut = () => {
    logOut();
    history.push("/");
  };

  return (
    <div>
      <div className={classes.header}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MonetizationOnIcon />
          <Typography color="textSecondary" className={classes.typography}>
            Jobcoin Sender
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FaceIcon />
          <Typography color="textSecondary" className={classes.typography}>
            Signed In
          </Typography>
          <Button className={classes.btn} onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
