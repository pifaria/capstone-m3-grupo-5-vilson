import Login from "../pages/login";
import Register from "../pages/register";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Event from "../pages/Event";
import Profile from "../pages/Profile";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { usePhotographerList } from "../providers/PhotographerList";
import { toast } from "react-toastify";

const Routes = () => {
  const { getPhotographers } = usePhotographerList();

  useEffect(() => {
    async function getInitialPhotographers() {
      try {
        await getPhotographers();
      } catch {
        toast.error(
          "Houve um problema tentando acessar a lista de fotografos. Tente novamente."
        );
      }
    }

    getInitialPhotographers();
  }, []);

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
