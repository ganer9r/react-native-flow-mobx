import * as React from "react";
import { AppStore, UserStore } from "../stores";

export function createStores() {
  return { 
    appStore: new AppStore(),
    userStore: new UserStore(),
  };
}

export const stores = createStores();

export const AppContext = React.createContext(stores);