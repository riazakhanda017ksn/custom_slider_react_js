import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import SingleUserDetails from "./components/Users/UsersDetails/SingleUserDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Users></Users>
        </Route>

        <Route path="/userDetails/:_id">
          <SingleUserDetails></SingleUserDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
