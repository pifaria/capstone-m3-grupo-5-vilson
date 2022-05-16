import Login from "../pages/login";
import Register from "../pages/register";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Event from "../pages/Event"
import Profile from "../pages/Profile";
import { Route, Switch } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { userInfoContext } from "../providers/userInfo";

const Routes = () => {
  const { userInfo } = useContext(userInfoContext);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setAuthenticated(true);
    }
  }, [userInfo]);

  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/signup">
        <Register authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
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
