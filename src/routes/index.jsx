import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Event from "../pages/Event";
import Profile from "../pages/Profile";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useUserInfo } from "../providers/userInfo";
import { Redirect } from "react-router-dom";

const Routes = () => {

  const { getUserInfo,isAuthenticated } = useUserInfo();

  useEffect(() => {
    async function getInitialUserInfo() {
      await getUserInfo();
    }

    getInitialUserInfo();
  },[]);


  return (
    <Switch>
      <Route exact path="/">
        {!isAuthenticated ? <Redirect to="/home"/> : <Redirect to="/dashboard"/>}
        <LandingPage/>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/signup">
      {isAuthenticated && <Redirect to="/dashboard" />}
        <Register />
      </Route>
      <Route path="/login">
      {isAuthenticated && <Redirect to="/dashboard" />}
        <Login />
      </Route>
      <Route path="/dashboard">
      {!isAuthenticated && <Redirect to="/" />}
        <Dashboard />
      </Route>
      <Route path="/events/:id">
      {!isAuthenticated && <Redirect to="/" />}
        <Event />
      </Route>
      <Route path="/profiles/:id">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
