export class AppRepositioy {
  static host = "http://api.kidrang.net/api/kidrang";
  static fileServer = "http://api.kidrang.net/";

  static async fetchVersions() {
    const url = this.host+"/versions"
    const res = await fetch(url);
    return await res.json();
  }
}