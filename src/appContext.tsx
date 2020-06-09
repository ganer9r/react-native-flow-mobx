import * as React from "react";
import { AppStore } from "./stores";

export function createStores() {
  return { 
    appStore: new AppStore(),
  };
}

export const stores = createStores();

export const AppContext = React.createContext(stores);