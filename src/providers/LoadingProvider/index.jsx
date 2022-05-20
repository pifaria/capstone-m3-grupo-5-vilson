import { createContext, useContext, useState } from "react";

const LoadingContext = createContext()

export const LoadingProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);

    function startLoading() {
      setIsLoading(true);
    }
    
    function finishLoading() {
      setIsLoading(false);
    }

    return (
        <LoadingContext.Provider value={{startLoading, finishLoading, isLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext)
