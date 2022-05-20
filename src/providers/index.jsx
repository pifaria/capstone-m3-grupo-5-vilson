import { UserInfoProvider } from "./userInfo";
import { RegisterModalProvider } from "./RegisterModal";
import { EventListProvider } from "./EventList";
import { PortfolioProvider } from "./Portfolio";
import { PhotographerListProvider } from "./PhotographerList";
import { LoadingProvider } from "./LoadingProvider";

const Providers = ({ children }) => {
  return (
    <UserInfoProvider>
      <EventListProvider>
        <PortfolioProvider>
          <PhotographerListProvider>
            <LoadingProvider>
              <RegisterModalProvider>{children}</RegisterModalProvider>
            </LoadingProvider>
          </PhotographerListProvider>
        </PortfolioProvider>
      </EventListProvider>
    </UserInfoProvider>
  );
};

export default Providers;
