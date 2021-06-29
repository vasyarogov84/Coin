import User from "./components/User";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", height: "100vh", flexDirection: "column" }}
      >
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
