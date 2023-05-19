import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const GlobalContext = createContext();

/**
 * * Same like React context hook but here we track the records through the signals only
 * @param {*} props
 * @returns
 */
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
