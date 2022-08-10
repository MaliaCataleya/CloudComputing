export default class AppAPI {
  // Singelton instance
  static #api = null;

  API_KEY = process.env.REACT_APP_API_KEY
  HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-IBM-Client-Id': this.API_KEY
  }

  URL = "https://df5ff463.eu-de.apigw.appdomain.cloud/google-location-data"
  LOCATION_PATH = "/location"
  ROUTE_PATH = "/route"
  GOOGLEDATA_PATH = "/googledata"

  #postGoogleJson = () => this.URL + this.GOOGLEDATA_PATH
  #getRoutesByDateAndSessionId = (date, sessionId) => this.URL + this.ROUTE_PATH + "?"  + new URLSearchParams({
    date: date,
    sessionId: sessionId
  });
  #postLocationBySessionId = () => this.URL + this.LOCATION_PATH
  #postRouteBySessionId = () => this.URL + this.ROUTE_PATH
  #getLocationsByDateAndSessionId = (date, sessionId) => this.URL + this.LOCATION_PATH + "?"  + new URLSearchParams({
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
        headers: this.HEADERS,
        method: "GET"
      }).then((responseJSON) => {
        return new Promise(function (resolve) {
          resolve(responseJSON);
        });
      });
    }

  getLocationsByDateAndSessionId(date, sessionId){
    return this.#fetchAdvanced(this.#getLocationsByDateAndSessionId(date.date, sessionId), {
      headers: this.HEADERS,
      method: "GET"
    }).then((responseJSON) => {
      return new Promise(function (resolve) {
        resolve(responseJSON);
      });
    });
  }

  postGoogleJson(googleJson, sessionId){
    let bodyData = JSON.stringify({
      sessionId: sessionId,
      timelineObjects: googleJson.timelineObjects,
    })
    return this.#fetchAdvanced(this.#postGoogleJson(googleJson, sessionId), {
      headers: this.HEADERS,
      method: "PUT",
      body: bodyData,
    }).then((responseJSON) => {
      return new Promise(function (resolve) {
        resolve(responseJSON);
      });
    });
  }

  postLocationBySessionId(locationJson, sessionId){
    return this.#fetchAdvanced(this.#postLocationBySessionId(locationJson, sessionId), {
      headers: this.HEADERS,
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
      headers: this.HEADERS,
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
