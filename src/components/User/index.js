import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Send from "./components/Send";
import History from "./components/History";

import { UserContext } from "../../context/UserContext";

const User = () => {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState({
    balance: 0,
    transactions: [],
  });

  const fetchUser = async (user) => {
    const result = await axios.get(
      `http://jobcoin.gemini.com/applicant-ominous/api/addresses/${user}`
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
      <Header />
      <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flex: 2,
            flexDirection: "column",
            padding: 20,
          }}
        >
          <Balance balance={userData.balance} />
          <Send user={user} />
        </div>
        <div style={{ display: "flex", flex: 3, padding: 20 }}>
          <History />
        </div>
      </div>
    </>
  );
};

export default User;
