import React from "react";
import FaceIcon from "@material-ui/icons/Face";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

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
          padding: "0px 10px",
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
          <p style={{ marginLeft: 15 }}>Jobcoin Sender</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FaceIcon />
          <p style={{ marginLeft: 15 }}>Signed In</p>
          <Button
            style={{ marginLeft: 15, color: "blue" }}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
