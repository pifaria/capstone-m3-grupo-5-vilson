import { RegisterModalProvider } from "./RegisterModal"

const Providers = ({ children }) => {
    return (
        <RegisterModalProvider>
            {children}
        </RegisterModalProvider>
    )
}

export default Providers