import { googleJSON } from './testData';
import { v4 as uuidv4 } from 'uuid';

const frisby = require('frisby');
const Joi = frisby.Joi;

const URL = "https://df5ff463.eu-de.apigw.appdomain.cloud/google-location-data"
const LOCATION_PATH = "/location"
const ROUTE_PATH = "/route"
const GOOGLEDATA_PATH = "/googledata"

const postGoogleJson = () => URL + GOOGLEDATA_PATH
const getRoutesByDateAndSessionId = (date, sessionId) => URL + ROUTE_PATH + "?"  + new URLSearchParams({
    date: date,
    sessionId: sessionId
  });
const getLocationsByDateAndSessionId = (date, sessionId) => URL + LOCATION_PATH + "?"  + new URLSearchParams({
    date: date,
    sessionId: sessionId,
})

const API_KEY = process.env.REACT_APP_API_KEY
const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-IBM-Client-Id': API_KEY
}

it('PUT should return a status of 401 if no api key is provided in the header', function () {
    return frisby
      .put(postGoogleJson(), googleJSON(uuidv4()))
      .expect('status', 401);
  });

it('PUT should return a status of 200 if data and an api key is provided', function () {
  return frisby
    .setup({
        request: {
          headers: HEADERS
        }
      })
    .put(postGoogleJson(), googleJSON(uuidv4()))
    .expect('status', 200);
});

describe('GET endpoints when data is available', () => {
  const sessionId = uuidv4()
  const date = "2020-05-31"
  beforeAll(() => {
    return frisby
      .setup({
          request: {
            headers: HEADERS
          }
        })
      .put(postGoogleJson(), googleJSON(sessionId))
      .expect('status', 200);
  });
  it('GET locations should return a status of 200 and valid data', function () {
    return frisby
      .setup({
          request: {
            headers: HEADERS
          }
        })
      .get(getLocationsByDateAndSessionId(date, sessionId))
      .expect('status', 200)
      .expect('jsonTypes', 'docs.*', { // Assert *each* object in 'docs' array
        '_id': Joi.string().required(),
        '_rev': Joi.string().required(),
        'locationJson': Joi.object().required()
      });
  });
  it('GET routes should return a status of 200 and valid data', function () {
    return frisby
      .setup({
          request: {
            headers: HEADERS
          }
        })
      .get(getRoutesByDateAndSessionId(date, sessionId))
      .expect('status', 200)
      .expect('jsonTypes', 'docs.*', { // Assert *each* object in 'docs' array
        '_id': Joi.string().required(),
        '_rev': Joi.string().required(),
        'routeJson': Joi.object().required()
      }); 
  });
}
)

describe('GET endpoints when data is unavailable', () => {
  const sessionId = uuidv4()
  const unavailableSessionId = "unavailableSessionId"
  const unavailableDate = "2020-06-31"
  beforeAll(() => {
    return frisby
      .setup({
          request: {
            headers: HEADERS
          }
        })
      .put(postGoogleJson(), googleJSON(sessionId))
      .expect('status', 200);
  });
  it('GET locations should return a status of 200 and an empty array', function () {
    return frisby
      .setup({
          request: {
            headers: HEADERS
          }
        })
      .get(getLocationsByDateAndSessionId(unavailableDate, unavailableSessionId))
      .expect('status', 200)
      .expect('jsonTypes', {
        docs: Joi.array().max(0)
    })
  });
  it('GET routes should return a status of 200 and an empty array', function () {
    return frisby
      .setup({
          request: {
            headers: HEADERS
          }
        })
      .get(getRoutesByDateAndSessionId(unavailableDate, unavailableSessionId))
      .expect('status', 200)
      .expect('jsonTypes', {
        docs: Joi.array().max(0)
    })
  });
}
)



