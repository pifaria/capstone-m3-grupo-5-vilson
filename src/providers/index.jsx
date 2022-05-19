import { UserInfoProvider } from "./userInfo";
import { RegisterModalProvider } from "./RegisterModal";
import { EventListProvider } from "./EventList";
import { PortfolioProvider } from "./Portfolio";
import { PhotographerListProvider } from "./PhotographerList";

const Providers = ({ children }) => {
  return (
      <UserInfoProvider>
        <EventListProvider>
          <PortfolioProvider>
            <PhotographerListProvider>
              <RegisterModalProvider>{children}</RegisterModalProvider>
            </PhotographerListProvider>
          </PortfolioProvider>
        </EventListProvider>
      </UserInfoProvider>
  );
};

export default Providers;
