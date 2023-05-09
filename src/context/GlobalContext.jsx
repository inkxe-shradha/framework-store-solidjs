import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [storeItems, setStoreItems] = createStore({
    isBannerVisible: true,
  });
  return (
    <GlobalContext.Provider value={{ storeItems, setStoreItems }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useContextHook = () => {
  return useContext(GlobalContext);
};

export default GlobalContextProvider;
