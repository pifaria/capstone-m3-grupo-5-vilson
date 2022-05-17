import { UserInfoProvider } from "./userInfo";
import { RegisterModalProvider } from "./RegisterModal";
import { EventListProvider } from "./EventList";
import { PortfolioProvider } from "./Portfolio";
import { IDGeneratorProvider } from "./IDGenerator";
import { PhotographerListProvider } from "./PhotographerList";

const Providers = ({ children }) => {
  return (
    <IDGeneratorProvider>
      <UserInfoProvider>
        <EventListProvider>
          <PortfolioProvider>
            <PhotographerListProvider>
              <RegisterModalProvider>{children}</RegisterModalProvider>
            </PhotographerListProvider>
          </PortfolioProvider>
        </EventListProvider>
      </UserInfoProvider>
    </IDGeneratorProvider>
  );
};

export default Providers;
