import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

export class UserStore {
  @observable
  token: string = '';

  @action
  setToken = (token: string) => {
    console.log('setToken', this.token)
    this.token = token
    console.log('setToken', this.token)
  }
}