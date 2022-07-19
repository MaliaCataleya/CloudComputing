export default class AppAPI {
  // Singelton instance
  static #api = null;

  #AppServerBaseURL = "/app";

  #getRoutesByDateAndSessionId = (date, sessionId) => "https://4b16383a.eu-gb.apigw.appdomain.cloud/cloud-computing/route?"  + new URLSearchParams({
    date: date,
    sessionId: sessionId
  });
  #postLocationBySessionId = () => "https://4b16383a.eu-gb.apigw.appdomain.cloud/cloud-computing/locations"
  #postRouteBySessionId = () => "https://4b16383a.eu-gb.apigw.appdomain.cloud/cloud-computing/route"
  #getLocationsByDateAndSessionId = (date, sessionId) => "https://4b16383a.eu-gb.apigw.appdomain.cloud/cloud-computing/locations?"  + new URLSearchParams({
    date: date,
    sessionId: sessionId,
})

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

    getRoutesByDateAndSessionId(date, sessionId){
      return this.#fetchAdvanced(this.#getRoutesByDateAndSessionId(date.date, sessionId), {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET"
      }).then((responseJSON) => {
        return new Promise(function (resolve) {
          resolve(responseJSON);
        });
      });
    }

  getLocationsByDateAndSessionId(date, sessionId){
    return this.#fetchAdvanced(this.#getLocationsByDateAndSessionId(date.date, sessionId), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "GET"
    }).then((responseJSON) => {
      return new Promise(function (resolve) {
        resolve(responseJSON);
      });
    });
  }


  postLocationBySessionId(locationJson, sessionId){
    return this.#fetchAdvanced(this.#postLocationBySessionId(locationJson, sessionId), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
            sessionId: sessionId,
            locationJson: locationJson,
          }),
    }).then((responseJSON) => {
      return new Promise(function (resolve) {
        resolve(responseJSON);
      });
    });
  }

  postRouteBySessionId(routeJson, sessionId){
    return this.#fetchAdvanced(this.#postRouteBySessionId(routeJson, sessionId), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
            sessionId: sessionId,
            routeJson: routeJson,
          }),
    }).then((responseJSON) => {
      return new Promise(function (resolve) {
        resolve(responseJSON);
      });
    });
  }

  // postFileByUser(googleJson, sessionId) {
  //   return this.#fetchAdvanced(this.#postLocationByUser(googleJson, sessionId), {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: "PUT",
  //     body: JSON.stringify({
  //           sessionId: sessionId,
  //           googleJson: googleJson,
  //         }),
  //   }).then((responseJSON) => {
  //     return new Promise(function (resolve) {
  //       resolve(responseJSON);
  //     });
  //   });
  //   return new Promise(function (resolve) {
  //       resolve(true);
  //     });
  // }
}
