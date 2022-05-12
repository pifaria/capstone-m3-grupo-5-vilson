import { UserInfoProvider } from "./userInfo"

const Providers = ({ children }) => {
    return (
        <UserInfoProvider>
            {children}
        </UserInfoProvider>
    )
}

export default Providers