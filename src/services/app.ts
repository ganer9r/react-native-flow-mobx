export class AppService {
  static _instance: null | AppService = null;

  appVersion: any = {};

  static getInstance() {
    if (AppService._instance == null) {
      AppService._instance = new AppService();
    }

    return this._instance;
  }

  setAppVersion(appVersion: any) {
    this.appVersion = appVersion
  }

  getImageHost() {
    return this.appVersion.image.values
  }

  getPlacePath() {
    return this.appVersion.places.values
  }
}
