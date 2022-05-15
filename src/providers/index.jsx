import { UserInfoProvider } from "./userInfo";
import { RegisterModalProvider } from "./RegisterModal";
import { EventListProvider } from "./EventList";
import { PortfolioProvider } from "./Portfolio";
import { IDGeneratorProvider } from "./IDGenerator";

const Providers = ({ children }) => {
  return (
    <IDGeneratorProvider>
      <UserInfoProvider>
        <EventListProvider>
          <PortfolioProvider>
            <RegisterModalProvider>{children}</RegisterModalProvider>
          </PortfolioProvider>
        </EventListProvider>
      </UserInfoProvider>
    </IDGeneratorProvider>
  );
};

export default Providers;
