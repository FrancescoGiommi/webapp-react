import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

/* Esporto il ContextProvider */
export const LoaderContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const loaderData = {
    isLoading,
    setIsLoading,
  };
  return (
    <LoaderContextProvider value={loaderData}>{children}</LoaderContextProvider>
  );
};

/* Esporto il LoaderContext */
export const useLoaderContext = () => useContext(LoaderContext);
