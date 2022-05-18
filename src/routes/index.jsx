import Login from "../pages/login";
import Register from "../pages/register";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Event from "../pages/Event";
import Profile from "../pages/Profile";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useUserInfo } from "../providers/userInfo";
import { useEventList } from "../providers/EventList";
import { usePortfolio } from "../providers/Portfolio";

const Routes = () => {
  const { getEventList } = useEventList();
  const { getPortfolio } = usePortfolio();
  const { userInfo, getUserInfo } = useUserInfo();

  useEffect(() => {
    async function getInitialUserInfo() {
      await getUserInfo();
    }

    getInitialUserInfo();
  },[]);

  useEffect(() => {
    if (!userInfo) {
      return;
    }

    async function getInitialStates() {
      try {
        await getPortfolio();
        await getEventList();
      } catch {
        toast.error(
          "Houve um problema com o servidor. Tente Novamente mais tarde."
        );
      }
    }

    getInitialStates();
  }, [userInfo]);

  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/events/:id">
        <Event />
      </Route>
      <Route path="/profiles/:id">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
