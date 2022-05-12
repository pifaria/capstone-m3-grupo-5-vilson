import Login from "../pages/login";
import Register from "../pages/register";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
