import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Send from "./components/Send";
import History from "./components/History";

import { UserContext } from "../../context/UserContext";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  userMain: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  user: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: 20,
  },
  userHistory: {
    display: "flex",
    flex: 4,
    padding: 20,
  },
});

const User = () => {
  const classes = useStyles();

  const { user, logOut } = useContext(UserContext);
  const [userData, setUserData] = useState({
    balance: 0,
    transactions: [],
  });

  const fetchUser = async (user) => {
    const result = await axios.get(
      `https://jobcoin.gemini.com/applicant-ominous/api/addresses/${user}`
    );
    setUserData(result.data);
  };

  useEffect(() => {
    if (user) {
      fetchUser(user);
    }
  }, [user]);

  return (
    <>
      <Header logOut={logOut} />
      <div className={classes.userMain}>
        <div className={classes.user}>
          <Balance balance={userData.balance} />
          <Send user={user} setUserData={setUserData} userData={userData} />
        </div>
        <div className={classes.userHistory}>
          <History balance={userData.balance} />
        </div>
      </div>
    </>
  );
};

export default User;
