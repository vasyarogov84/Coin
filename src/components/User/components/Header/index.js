import React from "react";
import FaceIcon from "@material-ui/icons/Face";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useHistory } from "react-router-dom";
import { Button, Typography, Divider } from "@material-ui/core";

const Header = ({ logOut }) => {
  const history = useHistory();
  const handleSignOut = () => {
    logOut();
    history.push("/");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px 10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MonetizationOnIcon />
          <Typography color="textSecondary" style={{ marginLeft: 15 }}>
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
          <Typography color="textSecondary" style={{ marginLeft: 15 }}>
            Signed In
          </Typography>
          <Button
            style={{ marginLeft: 15, color: "blue", textTransform: "none" }}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
