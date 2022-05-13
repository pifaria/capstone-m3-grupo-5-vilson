import { UserInfoProvider } from "./userInfo";
import { RegisterModalProvider } from "./RegisterModal";
import { EventListProvider } from "./EventList";

const Providers = ({ children }) => {
  return (
    <UserInfoProvider>
      <EventListProvider>
        <RegisterModalProvider>
          {children}
        </RegisterModalProvider>
      </EventListProvider>
    </UserInfoProvider>
  );
};

export default Providers;
