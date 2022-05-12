import { UserInfoProvider } from "./userInfo"
import { RegisterModalProvider } from "./RegisterModal"

const Providers = ({ children }) => {
    return (
      <UserInfoProvider>
        <RegisterModalProvider>
            {children}
        </RegisterModalProvider>
      </UserInfoProvider>
    )
}

export default Providers