export default class AppAPI {
  // Singelton instance
  static #api = null;

  #AppServerBaseURL = "/app";

  #getRoutesByDateURL = (date) => "";
  #postFileByUser = () => "https://4b16383a.eu-gb.apigw.appdomain.cloud/cloud-computing/entries"

  /**
   * Get the Singelton instance
   *
   * @public
   */
  static getAPI() {
    if (this.#api == null) {
      this.#api = new AppAPI();
    }
    return this.#api;
  }

  /**
   *  Returns a Promise which resolves to a json object.
   *  The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
   *  fetchAdvanced throws an Error also an server status errors
   */
  #fetchAdvanced = (url, init) =>
    fetch(url, init).then((res) => {
      // The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
      if (!res.ok) {
        throw Error(`${res.status} ${res.statusText}`);
      }
      return res.json();
    });

  getRoutesByDate(date) {
    return this.#fetchAdvanced(this.#getRoutesByDateURL(date)).then(
      (responseJSON) => {
        let routesJSON = responseJSON;
        return new Promise(function (resolve) {
          resolve(routesJSON);
        });
      }
    );
  }

  postFileByUser(googleJson, sessionId) {
    return this.#fetchAdvanced(this.#postFileByUser(googleJson, sessionId), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
            sessionId: sessionId,
            googleJson: googleJson,
          }),
    }).then((responseJSON) => {
      return new Promise(function (resolve) {
        resolve(responseJSON);
      });
    });
    // return new Promise(function (resolve) {
    //     resolve(true);
    //   });
  }
}
