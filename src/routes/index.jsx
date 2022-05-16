import Login from "../pages/login";
import Register from "../pages/register";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Event from "../pages/Event"
import Profile from "../pages/Profile";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/events/:id">
        <Event/>
      </Route>
      <Route path="/profiles/:id">
        <Profile/>
      </Route>
    </Switch>
  );
};

export default Routes;
