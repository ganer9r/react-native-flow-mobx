import { observable, action, computed } from "mobx";

export class AppStore {
  @observable
  isLoaded = false;

  @action
  onLoadComplate = () => {
    console.log('onLoadComplate', this.isLoaded)
    this.isLoaded = true
  }
}