import React from "react";
import MapComponent from "../mapComponent";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

let container = null;
const testDataLocations = [
    {
        "_id": "20915750e4e5642d76d69e11591a9b79",
        "_rev": "1-07e92e46954e82d3302521eb1cc45c0e",
        "locationJson": {
            "address": "O4 5\n68161 Mannheim\nDeutschland",
            "calibratedProbability": 26.05358,
            "dates": [
                "2020-05-31"
            ],
            "latitudeE7": 494864945,
            "locationConfidence": 52.49908,
            "longitudeE7": 84689422,
            "name": "Eis Fontanella",
            "placeId": "ChIJhzxPzyPMl0cRphLcpvo0Bgk",
            "sourceInfo": {
                "deviceTag": 1081000619
            }
        },
        "sessionId": "a0f45a3c-a0ce-4dcb-9617-207ae3b30767"
    },
    {
        "_id": "20915750e4e5642d76d69e11591a9d9b",
        "_rev": "1-cf4cc6cfd942003078d1c989a6f7773b",
        "locationJson": {
            "address": "68161 Mannheim\nDeutschland",
            "calibratedProbability": 24.646646,
            "dates": [
                "2020-05-31"
            ],
            "latitudeE7": 494861800,
            "locationConfidence": 51.585995,
            "longitudeE7": 84701260,
            "name": "Strohmarkt",
            "placeId": "ChIJn3T3fSHMl0cRGkeSaeOSBBk",
            "sourceInfo": {
                "deviceTag": 1081000619
            }
        },
        "sessionId": "a0f45a3c-a0ce-4dcb-9617-207ae3b30767"
    },
    {
        "_id": "20915750e4e5642d76d69e11591aa7af",
        "_rev": "1-0413983cdf4d78ae3dd2947374310a62",
        "locationJson": {
            "address": "Theodor-Heuss-Anlage 2\n68165 Mannheim\nDeutschland",
            "calibratedProbability": 75.17536,
            "dates": [
                "2020-05-31"
            ],
            "isCurrentLocation": true,
            "latitudeE7": 494793204,
            "locationConfidence": 89.463295,
            "longitudeE7": 84959423,
            "name": "Luisenpark",
            "placeId": "ChIJt5QQLJfOl0cR6t9CmSGozWE",
            "sourceInfo": {
                "deviceTag": 1081000619
            }
        },
        "sessionId": "a0f45a3c-a0ce-4dcb-9617-207ae3b30767"
    },
    {
        "_id": "20915750e4e5642d76d69e11591ab15f",
        "_rev": "1-8590725d579c852b8cc3ed3cbb023219",
        "locationJson": {
            "address": "Universitätsstraße 102\n70569 Stuttgart\nDeutschland",
            "calibratedProbability": 74.95372,
            "dates": [
                "2020-05-31",
                "2020-06-01",
                "2020-06-02"
            ],
            "isCurrentLocation": true,
            "latitudeE7": 487418618,
            "locationConfidence": 98.38764,
            "longitudeE7": 91027656,
            "name": "Universitätsstraße 102",
            "placeId": "ChIJ2U4EikLcmUcRVMneghS5MAY",
            "sourceInfo": {
                "deviceTag": 1081000619
            }
        },
        "sessionId": "a0f45a3c-a0ce-4dcb-9617-207ae3b30767"
    }
]

const testDataRoutes = [
    {
        "_id": "20915750e4e5642d76d69e11591ab1d5",
        "_rev": "1-124e97cdd49d94693fe710c1c381af33",
        "routeJson": {
            "activities": [
                {
                    "activityType": "IN_TRAM",
                    "probability": 54.534381628036
                },
                {
                    "activityType": "STILL",
                    "probability": 15.813812613487
                },
                {
                    "activityType": "WALKING",
                    "probability": 14.457634091377
                },
                {
                    "activityType": "IN_BUS",
                    "probability": 8.6107134819031
                },
                {
                    "activityType": "CYCLING",
                    "probability": 3.3823702484369
                },
                {
                    "activityType": "IN_PASSENGER_VEHICLE",
                    "probability": 1.8208159133792
                },
                {
                    "activityType": "IN_SUBWAY",
                    "probability": 0.41575506329536
                },
                {
                    "activityType": "IN_FERRY",
                    "probability": 0.37418380379677
                },
                {
                    "activityType": "IN_TRAIN",
                    "probability": 0.32251181546599
                },
                {
                    "activityType": "RUNNING",
                    "probability": 0.20470402669162
                },
                {
                    "activityType": "SKIING",
                    "probability": 0.052847515325993
                },
                {
                    "activityType": "MOTORCYCLING",
                    "probability": 0.0037637939385604
                },
                {
                    "activityType": "IN_VEHICLE",
                    "probability": 0.0033005977456924
                },
                {
                    "activityType": "FLYING",
                    "probability": 0.0020091594706173
                },
                {
                    "activityType": "SAILING",
                    "probability": 0.0011941430784645
                }
            ],
            "activityType": "IN_TRAM",
            "confidence": "LOW",
            "dates": [
                "2020-05-31"
            ],
            "distance": 4128,
            "duration": {
                "endTimestamp": "2020-05-31T14:16:24.891Z",
                "startTimestamp": "2020-05-31T13:45:00.024Z"
            },
            "endLocation": {
                "latitudeE7": 494785810,
                "longitudeE7": 84965060,
                "sourceInfo": {
                    "deviceTag": 1081000619
                }
            },
            "simplifiedRawPath": {
                "distanceMeters": 3608.3039845889,
                "points": [
                    {
                        "accuracyMeters": 25,
                        "latE7": 494844790,
                        "lngE7": 84738982,
                        "timestamp": "2020-05-31T13:46:16.439Z"
                    },
                    {
                        "accuracyMeters": 17,
                        "latE7": 494823688,
                        "lngE7": 84727203,
                        "timestamp": "2020-05-31T13:48:17.462Z"
                    },
                    {
                        "accuracyMeters": 150,
                        "latE7": 494788654,
                        "lngE7": 84820666,
                        "timestamp": "2020-05-31T13:51:08.230Z"
                    },
                    {
                        "accuracyMeters": 150,
                        "latE7": 494762944,
                        "lngE7": 84857769,
                        "timestamp": "2020-05-31T13:52:18.587Z"
                    },
                    {
                        "accuracyMeters": 89,
                        "latE7": 494773771,
                        "lngE7": 84907877,
                        "timestamp": "2020-05-31T13:54:07.947Z"
                    },
                    {
                        "accuracyMeters": 119,
                        "latE7": 494803234,
                        "lngE7": 84936912,
                        "timestamp": "2020-05-31T13:56:08.987Z"
                    },
                    {
                        "accuracyMeters": 52,
                        "latE7": 494793768,
                        "lngE7": 84963203,
                        "timestamp": "2020-05-31T14:02:17.809Z"
                    },
                    {
                        "accuracyMeters": 45,
                        "latE7": 494803514,
                        "lngE7": 84969363,
                        "timestamp": "2020-05-31T14:06:19.456Z"
                    },
                    {
                        "accuracyMeters": 29,
                        "latE7": 494817138,
                        "lngE7": 84957054,
                        "timestamp": "2020-05-31T14:14:23.814Z"
                    }
                ],
                "source": "INFERRED"
            },
            "startLocation": {
                "latitudeE7": 494872210,
                "longitudeE7": 84675010,
                "sourceInfo": {
                    "deviceTag": 1081000619
                }
            },
            "transitPath": {
                "confidence": 0.90183267070529,
                "distanceMeters": 4128,
                "hexRgbColor": "956C29",
                "linePlaceId": "ChIJNVw_MNfOl0cRt8FFH-yFl24",
                "name": "6/6A",
                "source": "INFERRED",
                "transitStops": [
                    {
                        "address": "68161 Mannheim\nDeutschland",
                        "latitudeE7": 494872210,
                        "longitudeE7": 84675010,
                        "name": "Paradeplatz",
                        "placeId": "ChIJm1rqoSPMl0cROeBIUIC1Vv0"
                    },
                    {
                        "address": "68165 Mannheim\nDeutschland",
                        "latitudeE7": 494785810,
                        "longitudeE7": 84965060,
                        "name": "Luisenp./Technoseum",
                        "placeId": "ChIJZ3oo-b7Ol0cR1Z1Ea6ZlGyM"
                    }
                ]
            }
        },
        "sessionId": "a0f45a3c-a0ce-4dcb-9617-207ae3b30767"
    },
    {
        "_id": "20915750e4e5642d76d69e11591abde1",
        "_rev": "1-5f63e8be0f43d29d3cbb370834c28510",
        "routeJson": {
            "activities": [
                {
                    "activityType": "IN_PASSENGER_VEHICLE",
                    "probability": 56.987738609314
                },
                {
                    "activityType": "CYCLING",
                    "probability": 13.450241088867
                },
                {
                    "activityType": "IN_BUS",
                    "probability": 10.669694840908
                },
                {
                    "activityType": "WALKING",
                    "probability": 9.7826860845089
                },
                {
                    "activityType": "MOTORCYCLING",
                    "probability": 4.3536432087421
                },
                {
                    "activityType": "STILL",
                    "probability": 2.0609103143215
                },
                {
                    "activityType": "IN_TRAIN",
                    "probability": 1.2920157983899
                },
                {
                    "activityType": "RUNNING",
                    "probability": 0.57653384283185
                },
                {
                    "activityType": "IN_FERRY",
                    "probability": 0.44673699885607
                },
                {
                    "activityType": "IN_TRAM",
                    "probability": 0.12508222134784
                },
                {
                    "activityType": "IN_SUBWAY",
                    "probability": 0.11382122756913
                },
                {
                    "activityType": "FLYING",
                    "probability": 0.10692555224523
                },
                {
                    "activityType": "SAILING",
                    "probability": 0.018915376858786
                },
                {
                    "activityType": "SKIING",
                    "probability": 0.012445745232981
                },
                {
                    "activityType": "IN_VEHICLE",
                    "probability": 0.0026137482564081
                }
            ],
            "activityType": "IN_PASSENGER_VEHICLE",
            "confidence": "LOW",
            "dates": [
                "2020-05-31"
            ],
            "distance": 94126,
            "duration": {
                "endTimestamp": "2020-05-31T22:06:17.532Z",
                "startTimestamp": "2020-05-31T15:36:11.914Z"
            },
            "endLocation": {
                "latitudeE7": 487419270,
                "longitudeE7": 91028235,
                "sourceInfo": {
                    "deviceTag": 1081000619
                }
            },
            "parkingEvent": {
                "location": {
                    "accuracyMetres": 72,
                    "latitudeE7": 487419270,
                    "longitudeE7": 91028235
                },
                "locationSource": "FROM_RAW_LOCATION",
                "method": "END_OF_ACTIVITY_SEGMENT",
                "timestamp": "2020-05-31T22:06:17.532Z"
            },
            "startLocation": {
                "latitudeE7": 494873100,
                "longitudeE7": 84898471,
                "sourceInfo": {
                    "deviceTag": 1081000619
                }
            },
            "waypointPath": {
                "confidence": 1,
                "distanceMeters": 131311.72088313,
                "roadSegment": [
                    {
                        "placeId": "ChIJEUrLBZrOl0cREVq8inLrs6E"
                    },
                    {
                        "placeId": "ChIJHc2mA5rOl0cR9iyktX5mP5s"
                    },
                    {
                        "placeId": "ChIJRzco-JnOl0cRlYshga1z5lQ"
                    },
                    {
                        "placeId": "ChIJLb6z8JnOl0cRt2JOfJXmS8s"
                    },
                    {
                        "placeId": "ChIJIZNzwZnOl0cRr61uTrbOkmI"
                    },
                    {
                        "placeId": "ChIJT8KKRJjOl0cRS_p00flCfEw"
                    },
                    {
                        "placeId": "ChIJC1MofJjOl0cRAHME_nVfpR8"
                    },
                    {
                        "placeId": "ChIJl5N4fqLOl0cRndY7rHuunEg"
                    },
                    {
                        "placeId": "ChIJpeFfZKLOl0cR-bLzu3Huw_M"
                    },
                    {
                        "placeId": "ChIJNRHJZ6LOl0cRRfmT2_Kd3FI"
                    },
                    {
                        "placeId": "ChIJzzYgXaLOl0cRdW-57TwLQW8"
                    },
                    {
                        "placeId": "ChIJzzYgXaLOl0cRkBg1l6Ycqpo"
                    },
                    {
                        "placeId": "ChIJuydE9qLOl0cRKl86x_h_yl4"
                    },
                    {
                        "placeId": "ChIJV0L73aLOl0cRcsGVKIJhUzM"
                    },
                    {
                        "placeId": "ChIJ2yMN16LOl0cRzh_mzxYTtUA"
                    },
                    {
                        "placeId": "ChIJVfNf1aLOl0cR5s35CGy9aAE"
                    },
                    {
                        "placeId": "ChIJC3wZ1LzOl0cRRuVst1klpvI"
                    },
                    {
                        "placeId": "ChIJraOO2bzOl0cRDDT7SboK5ug"
                    },
                    {
                        "placeId": "ChIJVXIK5rzOl0cRUgeJluCj1ic"
                    },
                    {
                        "placeId": "ChIJNdgm9LzOl0cRppzggK5-KIQ"
                    },
                    {
                        "placeId": "ChIJ9W8AX7zOl0cRd6O93yacCQY"
                    },
                    {
                        "placeId": "ChIJgSP8Z7zOl0cRcmSDIHvzxo0"
                    },
                    {
                        "placeId": "ChIJD4zLabzOl0cRgeuYK4_wEIM"
                    },
                    {
                        "placeId": "ChIJ8SgvarzOl0cRy31SjnLYPTs"
                    },
                    {
                        "placeId": "ChIJt_Wxa7zOl0cRBYMtlM5AtYA"
                    },
                    {
                        "placeId": "ChIJlcIHa7zOl0cR_TVgZH8UIws"
                    },
                    {
                        "placeId": "ChIJ28GVarzOl0cRNQoVpuM1Ed4"
                    },
                    {
                        "placeId": "ChIJk6jqarzOl0cRI3LHVEAlZlI"
                    },
                    {
                        "placeId": "ChIJvR6bFLzOl0cRHyqNdwUUBwk"
                    },
                    {
                        "placeId": "ChIJi6GME7zOl0cRvNFmN_6Kjlw"
                    },
                    {
                        "placeId": "ChIJpwpbBbzOl0cRcOZIr4x_I3E"
                    },
                    {
                        "placeId": "ChIJ4fLLAbzOl0cR1_JnzS0jzWE"
                    },
                    {
                        "placeId": "ChIJ2ZRGq77Ol0cRcwA1mJsMHFU"
                    },
                    {
                        "placeId": "ChIJuXg6S7nOl0cRe8T9t2Y1-NA"
                    },
                    {
                        "placeId": "ChIJy35oM7nOl0cR5mO8YJYpZAg"
                    },
                    {
                        "placeId": "ChIJRdB7LbnOl0cRaVSIhD4w04c"
                    },
                    {
                        "placeId": "ChIJNc8QxrjOl0cRHl1aGbxSgYE"
                    },
                    {
                        "placeId": "ChIJNc8QxrjOl0cRqB9bnaiwPSM"
                    },
                    {
                        "placeId": "ChIJ8_iDYMfOl0cRhHfV9YHBTG8"
                    },
                    {
                        "placeId": "ChIJASySaMfOl0cReiWvOqQ86qs"
                    },
                    {
                        "placeId": "ChIJS9msFMfOl0cRk3kBBL-NE6Y"
                    },
                    {
                        "placeId": "ChIJPW2aBMfOl0cR9EYWSd2z8WI"
                    },
                    {
                        "placeId": "ChIJT2fS_cbOl0cRpo-ov68Q6a0"
                    },
                    {
                        "placeId": "ChIJc8x-fMbOl0cRCqtSeOVZ7f0"
                    },
                    {
                        "placeId": "ChIJP4mMdMXOl0cR_Ejp0dE5LUs"
                    },
                    {
                        "placeId": "ChIJqd5_dMXOl0cRxemsfmaUOUw"
                    },
                    {
                        "placeId": "ChIJL6mcU8XOl0cRcAcm76DWd_8"
                    },
                    {
                        "placeId": "ChIJF2JtGtfOl0cRgmEcBxVnl5A"
                    },
                    {
                        "placeId": "ChIJQZrZq9fOl0cRNoV_n2V0FbY"
                    },
                    {
                        "placeId": "ChIJCf0dM9bOl0cRbqWZh7DZKtg"
                    },
                    {
                        "placeId": "ChIJC--E1inPl0cREysRrD5Zf9Q"
                    },
                    {
                        "placeId": "ChIJi4Y14C3Pl0cRekC0YFIbT4U"
                    },
                    {
                        "placeId": "ChIJeZPtEDLPl0cRbBpU9Kyr37k"
                    },
                    {
                        "placeId": "ChIJdSIsOTLPl0cRVGDlPjKl5tA"
                    },
                    {
                        "placeId": "ChIJw5hepjPPl0cRugx4MhS6hG8"
                    },
                    {
                        "placeId": "ChIJH6dQSsvIl0cRlvBVkFfG1iM"
                    },
                    {
                        "placeId": "ChIJg47oAcvIl0cRDMaV5cJeOKQ"
                    },
                    {
                        "placeId": "ChIJcSNXVMrIl0cRxrM1ANgnz50"
                    },
                    {
                        "placeId": "ChIJQyfhB8jIl0cRbo3mCRdgZLY"
                    },
                    {
                        "placeId": "ChIJD166p8DIl0cRrDtSZ960v7o"
                    },
                    {
                        "placeId": "ChIJT67YxIfIl0cRMp97P76t4To"
                    },
                    {
                        "placeId": "ChIJ9_KM6YfIl0cRllW1ftD1JL8"
                    },
                    {
                        "placeId": "ChIJKx-H_3DIl0cRJ7xikFn8FYg"
                    },
                    {
                        "placeId": "ChIJm1heB3HIl0cRzcRL-U3Ysbo"
                    },
                    {
                        "placeId": "ChIJrcRB1A7Il0cRS43o4FhNkKg"
                    },
                    {
                        "placeId": "ChIJm4-_3yK4l0cR7RTHA7veiv4"
                    },
                    {
                        "placeId": "ChIJK6wjazu4l0cRdRexQMpW-v0"
                    },
                    {
                        "placeId": "ChIJs4tbBTu4l0cRo96CrGyQFuY"
                    },
                    {
                        "placeId": "ChIJJ1vkAzu4l0cR6OeA786YDAk"
                    },
                    {
                        "placeId": "ChIJd3Si_zq4l0cROTIr4sVGcEY"
                    },
                    {
                        "placeId": "ChIJ3dtRyjC4l0cRuHz6XAXNpwE"
                    },
                    {
                        "placeId": "ChIJF1y5VbW5l0cROoJsrNjHHkc"
                    },
                    {
                        "placeId": "ChIJmQqCr7W5l0cRYODmbJhGCRY"
                    },
                    {
                        "placeId": "ChIJs2m3JrS5l0cRZo4javyc3pQ"
                    },
                    {
                        "placeId": "ChIJRUfi3bC5l0cRdK1FCb8vnMU"
                    },
                    {
                        "placeId": "ChIJmxvmtLq5l0cR3LMXQ8YsZpE"
                    },
                    {
                        "placeId": "ChIJ0cSuBaS5l0cRpw2WLUQE-aQ"
                    },
                    {
                        "placeId": "ChIJt2H8f3S5l0cRyI_aYJ7eiqk"
                    },
                    {
                        "placeId": "ChIJMRPiK265l0cRlyGIaawWBno"
                    },
                    {
                        "placeId": "ChIJgUbxd2-5l0cR70pxlf7KjSo"
                    },
                    {
                        "placeId": "ChIJdXR_7mW5l0cRZAQAs87BI7g"
                    },
                    {
                        "placeId": "ChIJyTwTi2a5l0cRmdwDTfpTpH4"
                    },
                    {
                        "placeId": "ChIJX9v98Wa5l0cRLBmiZ9fDd00"
                    },
                    {
                        "placeId": "ChIJy7Yz52a5l0cREGtM29AmNiU"
                    },
                    {
                        "placeId": "ChIJAQNrMWe5l0cRZzv7Kkxu4M0"
                    },
                    {
                        "placeId": "ChIJmZjgRl-5l0cRQlXn0vGpBIc"
                    },
                    {
                        "placeId": "ChIJ5yOa6eK7l0cRF_9llWihaVs"
                    },
                    {
                        "placeId": "ChIJIxl0k_e7l0cRN_Z0cz7cUtI"
                    },
                    {
                        "placeId": "ChIJkTqOlfe7l0cRU2qP1KeRgYs"
                    },
                    {
                        "placeId": "ChIJp_MPTva7l0cRe-3hx_X8wkc"
                    },
                    {
                        "placeId": "ChIJDV0dYIu7l0cRi8Xipf8yOwo"
                    },
                    {
                        "placeId": "ChIJ6wqkfIy7l0cRWX7NwN-mwXQ"
                    },
                    {
                        "placeId": "ChIJa5O3JoO7l0cRYYBzxZ5Od0A"
                    },
                    {
                        "placeId": "ChIJIY6lVXi7l0cREkb646NGojs"
                    },
                    {
                        "placeId": "ChIJ46KPAqq8l0cRf1YJMYnHfqo"
                    },
                    {
                        "placeId": "ChIJcR6VgFW7l0cRDf4YRElVj90"
                    },
                    {
                        "placeId": "ChIJz94SkKakl0cRsWvS0vspWME"
                    },
                    {
                        "placeId": "ChIJHeA-uJqkl0cRYdauMKhElCk"
                    },
                    {
                        "placeId": "ChIJx2Rve2-kl0cRy5pWxIB2W30"
                    },
                    {
                        "placeId": "ChIJ_WyWbW-kl0cRbSny61TAHJg"
                    },
                    {
                        "placeId": "ChIJ15NnEW-kl0cRKYav99exxXU"
                    },
                    {
                        "placeId": "ChIJ6-atwW6kl0cRYTP9VlMyvQc"
                    },
                    {
                        "placeId": "ChIJM954PxSkl0cRNJumJKPyYSs"
                    },
                    {
                        "placeId": "ChIJex36-Rakl0cRb5HQfOGcu9Y"
                    },
                    {
                        "placeId": "ChIJt2Po_hakl0cR-QcPY0f0TQ8"
                    },
                    {
                        "placeId": "ChIJQx1wpxekl0cR-VqzJylYzqk"
                    },
                    {
                        "placeId": "ChIJy_pgnBekl0cRj-zuN_dOsQw"
                    },
                    {
                        "placeId": "ChIJTb0eMBikl0cRgf791r9Uql8"
                    },
                    {
                        "placeId": "ChIJTb0eMBikl0cRfrCJMBN1n8E"
                    },
                    {
                        "placeId": "ChIJ2xfMXhikl0cRSI5H1r_ySAw"
                    },
                    {
                        "placeId": "ChIJo15d9Bikl0cRwXFa_UXNDzg"
                    },
                    {
                        "placeId": "ChIJgwwY6xikl0cROg-FG-WLm28"
                    },
                    {
                        "placeId": "ChIJkTsMwBikl0cR-Tjmva9-qXk"
                    },
                    {
                        "placeId": "ChIJkTsMwBikl0cR7hdh2xCbUjw"
                    },
                    {
                        "placeId": "ChIJDdShSB-kl0cR88v5IzB4-W0"
                    },
                    {
                        "placeId": "ChIJlcXmax-kl0cRpRkeFEBTCTU"
                    },
                    {
                        "placeId": "ChIJf9NOa6Oml0cRiEBLX_Ca3r8"
                    },
                    {
                        "placeId": "ChIJ3zxWjcGml0cRl5wFbnef208"
                    },
                    {
                        "placeId": "ChIJZSh54ueml0cRv7ITAGNZe3I"
                    },
                    {
                        "placeId": "ChIJ6flLoOGml0cRo1lmbv_cFiQ"
                    },
                    {
                        "placeId": "ChIJT0JSnIwIl0cRlnEiJ6dua78"
                    },
                    {
                        "placeId": "ChIJT0JSnIwIl0cRweC871vjxIo"
                    },
                    {
                        "placeId": "ChIJYdPxw40Il0cR4GCM8g8YqqQ"
                    },
                    {
                        "placeId": "ChIJSVpJ5o0Il0cRrFw-b2CgOcI"
                    },
                    {
                        "placeId": "ChIJezrPAI4Il0cRd4zWNu5-dEI"
                    },
                    {
                        "placeId": "ChIJhYuQ_JkIl0cRRHjulEoZFTs"
                    },
                    {
                        "placeId": "ChIJByn_6ZkIl0cRiXl8G_2LSj4"
                    },
                    {
                        "placeId": "ChIJp4zfsJkIl0cR2pRCD3Pwdp4"
                    },
                    {
                        "placeId": "ChIJM-91spkIl0cRvVqjygJJB8o"
                    },
                    {
                        "placeId": "ChIJl3RZlpgIl0cRu985wvOp-Jw"
                    },
                    {
                        "placeId": "ChIJR3ugG6IIl0cR32Gqqi_EEdw"
                    },
                    {
                        "placeId": "ChIJKQjCT6EIl0cRGidPeHO8N-k"
                    },
                    {
                        "placeId": "ChIJywaksqYIl0cRmevfi-asqRo"
                    },
                    {
                        "placeId": "ChIJA08OWa8Il0cRq3SUnXY4YqA"
                    },
                    {
                        "placeId": "ChIJw_XgLKwIl0cRgdwOE1nY6i0"
                    },
                    {
                        "placeId": "ChIJY3Env1IPl0cRlCeDt0xsaMQ"
                    },
                    {
                        "placeId": "ChIJI2Uus00Pl0cR6HzTybG8iFI"
                    },
                    {
                        "placeId": "ChIJJX8wlksPl0cRuH953slAQjQ"
                    },
                    {
                        "placeId": "ChIJewKXhjUPl0cRRLsAD94jMfA"
                    },
                    {
                        "placeId": "ChIJL_A7XDQPl0cRKFBsGpi0bJo"
                    },
                    {
                        "placeId": "ChIJRyhShjMPl0cRZLUFLORI0gE"
                    },
                    {
                        "placeId": "ChIJEfz3gigPl0cRamWn0N2nX0Q"
                    },
                    {
                        "placeId": "ChIJEQ8Pc9kOl0cR1nF25SwWJ0w"
                    },
                    {
                        "placeId": "ChIJ86p23NwOl0cRPnIIx7GvuNA"
                    },
                    {
                        "placeId": "ChIJr2a4WZMOl0cRghWmfBx4GF8"
                    },
                    {
                        "placeId": "ChIJFT7rXZMOl0cRbWiP-Lv35JM"
                    },
                    {
                        "placeId": "ChIJ0-56ZZMOl0cR8130V0jLSQU"
                    },
                    {
                        "placeId": "ChIJ3_n4lpMOl0cRdNx3IZaQ7mQ"
                    },
                    {
                        "placeId": "ChIJIWHV3pMOl0cRIeM86r2ywFo"
                    },
                    {
                        "placeId": "ChIJNRaA7SgMl0cR9IneRwG9MDY"
                    },
                    {
                        "placeId": "ChIJ27EcQFcMl0cRILDbGg1vwjU"
                    },
                    {
                        "placeId": "ChIJK2yrn1cMl0cROJ1lGvM2wIw"
                    },
                    {
                        "placeId": "ChIJgymE61cMl0cRIp2ZywJ0FV8"
                    },
                    {
                        "placeId": "ChIJk0Aqu_kMl0cRlPZNoubJVMU"
                    },
                    {
                        "placeId": "ChIJZZFdgvkMl0cRIIFBtUylNek"
                    },
                    {
                        "placeId": "ChIJuejrIuEMl0cRkJKC5fPxkWo"
                    },
                    {
                        "placeId": "ChIJ49GQ79cMl0cRGhqkdWhL2WI"
                    },
                    {
                        "placeId": "ChIJs2jiuNRyl0cRMiPZFVD77tI"
                    },
                    {
                        "placeId": "ChIJ075SM8Vyl0cRVg-aEvYzzJ8"
                    },
                    {
                        "placeId": "ChIJ9ZxhpPByl0cRziWfR7GYieQ"
                    },
                    {
                        "placeId": "ChIJY2gpL1hyl0cRE_AangybtAY"
                    },
                    {
                        "placeId": "ChIJRWQ32Vlyl0cRh2AoOvDri6E"
                    },
                    {
                        "placeId": "ChIJtbq1n1Byl0cR7Eh35ifAMts"
                    },
                    {
                        "placeId": "ChIJkXxKeVByl0cRKlp719jqijA"
                    },
                    {
                        "placeId": "ChIJqTlCNkhyl0cRbnprr1W6GYw"
                    },
                    {
                        "placeId": "ChIJbfCkK0hyl0cRudoiNGlW6NQ"
                    },
                    {
                        "placeId": "ChIJES3bRjFyl0cRGD3zQV5CuHI"
                    },
                    {
                        "placeId": "ChIJr71saTFyl0cRqgOmE7mJDmM"
                    },
                    {
                        "placeId": "ChIJdW23bzFyl0cRuoooCJSqEms"
                    },
                    {
                        "placeId": "ChIJV4LCuy1yl0cRPqlchhCcyJ0"
                    },
                    {
                        "placeId": "ChIJg2-8Pityl0cR5kqmRo5Kmy0"
                    },
                    {
                        "placeId": "ChIJ1z404X9xl0cRHVxlxXlbzrI"
                    },
                    {
                        "placeId": "ChIJh4CUwH9xl0cR6Vq6FT3XH4E"
                    },
                    {
                        "placeId": "ChIJEVvZM3lxl0cRXYzvjwdK_nc"
                    },
                    {
                        "placeId": "ChIJr6pL23Bxl0cR2AKHpvxsE2k"
                    },
                    {
                        "placeId": "ChIJuccpF3Fxl0cRtQcGzCRaXrg"
                    },
                    {
                        "placeId": "ChIJuccpF3Fxl0cRHXYOiEUsprY"
                    },
                    {
                        "placeId": "ChIJYU76fnFxl0cRnEsA9IQ6KDI"
                    },
                    {
                        "placeId": "ChIJ3T9oK3Jxl0cR_CgF46FeetI"
                    },
                    {
                        "placeId": "ChIJvagyN3Jxl0cRpM82wUQaL3M"
                    },
                    {
                        "placeId": "ChIJ3cGAnnJxl0cR2SaA0AzsGqM"
                    },
                    {
                        "placeId": "ChIJPdMbxBJxl0cR3mr47CLJU9E"
                    },
                    {
                        "placeId": "ChIJ0xAUoBpxl0cRsKvaRioXgL0"
                    },
                    {
                        "placeId": "ChIJtb_ZxwNxl0cRpvs8UULgEVU"
                    },
                    {
                        "placeId": "ChIJA_9YIf5wl0cR3mJnO8YIs28"
                    },
                    {
                        "placeId": "ChIJ75SQFlZwl0cRDmv9lqOXYPo"
                    },
                    {
                        "placeId": "ChIJuS7gTlZwl0cRXaug-wRoKUY"
                    },
                    {
                        "placeId": "ChIJz0QH8Vlwl0cRUXzB2sr7KAM"
                    },
                    {
                        "placeId": "ChIJhd0MkBRwl0cRnpA6ExGZT8E"
                    },
                    {
                        "placeId": "ChIJES58VxFwl0cRtotHaIwWdrU"
                    },
                    {
                        "placeId": "ChIJZfWTkhBwl0cRpESNelc809k"
                    },
                    {
                        "placeId": "ChIJicBwhRBwl0cReFkzAxQ_CTI"
                    },
                    {
                        "placeId": "ChIJ2XtWfxpwl0cRDjNf5VrX8-A"
                    },
                    {
                        "placeId": "ChIJ4cB9QRtwl0cRas4i4_va-kk"
                    },
                    {
                        "placeId": "ChIJ8SYuoP1vl0cRt8TmEfpxl-4"
                    },
                    {
                        "placeId": "ChIJLdVFzF5ll0cRJFRaHxm1sHY"
                    },
                    {
                        "placeId": "ChIJCfXeu15ll0cRLhU1ALd93fI"
                    },
                    {
                        "placeId": "ChIJg6JC52pll0cROj8lTXhYIbg"
                    },
                    {
                        "placeId": "ChIJGcjW_Blll0cRIBFFvpwx0q4"
                    },
                    {
                        "placeId": "ChIJqXDqaBlll0cRLk7MwQYnz0Q"
                    },
                    {
                        "placeId": "ChIJhVPKsx5ll0cRLiidPYBRB6g"
                    },
                    {
                        "placeId": "ChIJKc48-ONkl0cRbqJRdrOtpsc"
                    },
                    {
                        "placeId": "ChIJAV92hu9kl0cRzNmSbAVDqHE"
                    },
                    {
                        "placeId": "ChIJjwA5k45kl0cRPMbSbwuRY9Q"
                    },
                    {
                        "placeId": "ChIJL7o9k45kl0cRSQ-WLwPu6hg"
                    },
                    {
                        "placeId": "ChIJL7o9k45kl0cR1oIEzkcTHuE"
                    },
                    {
                        "placeId": "ChIJw-Vc54Vkl0cRzMR_rPjwrh8"
                    },
                    {
                        "placeId": "ChIJ7Z22nYZkl0cRqonWc5zD9z0"
                    },
                    {
                        "placeId": "ChIJaaABQ4Fkl0cRUXGrr-cY0AE"
                    },
                    {
                        "placeId": "ChIJZTSiO35jl0cRniLn1HZ0UdY"
                    },
                    {
                        "placeId": "ChIJveoFOX5jl0cRJ46JL7UgH7Y"
                    },
                    {
                        "placeId": "ChIJDUAPWn5jl0cRxBJ0l2fnO08"
                    },
                    {
                        "placeId": "ChIJ0RaZ_3Vjl0cRaYW6XP92JWo"
                    },
                    {
                        "placeId": "ChIJ69ZjAp5jl0cR5w8TgJf3C0g"
                    },
                    {
                        "placeId": "ChIJwzdAIp5jl0cRQwSb2h5m-bo"
                    },
                    {
                        "placeId": "ChIJ21FXyJ9jl0cRiEerPoT0oN8"
                    },
                    {
                        "placeId": "ChIJ782nbKFjl0cRO-Sem-ri1Nk"
                    },
                    {
                        "placeId": "ChIJ7UhK8rJjl0cRVlKx6Pd7KDM"
                    },
                    {
                        "placeId": "ChIJmzvYyUhil0cR0M7hwhqOE6U"
                    },
                    {
                        "placeId": "ChIJZZweohJil0cRHuEYIiSI4fc"
                    },
                    {
                        "placeId": "ChIJ1XEfZg1il0cRgvHlxAvjyPs"
                    },
                    {
                        "placeId": "ChIJI18gEw1il0cR0BxCuNLuzw0"
                    },
                    {
                        "placeId": "ChIJH4c5BQ1il0cR0NY0OTd-AT0"
                    },
                    {
                        "placeId": "ChIJj3PG_Qxil0cRLyNE_zb3UjU"
                    },
                    {
                        "placeId": "ChIJLVbruwtil0cR349Q6nmjvKg"
                    },
                    {
                        "placeId": "ChIJB2r3y6bYmUcRPE4JZ1JbPBM"
                    },
                    {
                        "placeId": "ChIJUSOLDaTYmUcR4bdP6izNews"
                    },
                    {
                        "placeId": "ChIJbxyrdMfYmUcRUtMKELPaglE"
                    },
                    {
                        "placeId": "ChIJU2SBecbYmUcRfrMQMOTh728"
                    },
                    {
                        "placeId": "ChIJdzZyV8XYmUcRBNMPgGG0F8I"
                    },
                    {
                        "placeId": "ChIJIYyd3tbYmUcRLSAtt__fgGU"
                    },
                    {
                        "placeId": "ChIJid5jYNbYmUcRA2i9gJbEPuM"
                    },
                    {
                        "placeId": "ChIJ5TNBbtbYmUcR8rzXGr3K8pQ"
                    },
                    {
                        "placeId": "ChIJs0n1_NXYmUcRbhDMEfJsavM"
                    },
                    {
                        "placeId": "ChIJ80i1CSrZmUcRsiWhg7gU5EI"
                    },
                    {
                        "placeId": "ChIJB7QxDSrZmUcRmFAP4qwwyc0"
                    },
                    {
                        "placeId": "ChIJ03p8uNTemUcRjSr2xAsmBCA"
                    },
                    {
                        "placeId": "ChIJmbiRV9DemUcRapjs8ALrxOA"
                    },
                    {
                        "placeId": "ChIJpTkbl8LemUcRwm60u5Ufitw"
                    },
                    {
                        "placeId": "ChIJJfCmJ-jemUcRuJVNML3RF0M"
                    },
                    {
                        "placeId": "ChIJCwoKAOnemUcRboHyre4fZrg"
                    },
                    {
                        "placeId": "ChIJRxLINunemUcRwhmOIiJoYjs"
                    },
                    {
                        "placeId": "ChIJwSjezu3emUcRtWdxidNN9L0"
                    },
                    {
                        "placeId": "ChIJYxwtg-3emUcROzqWXeVWD8E"
                    },
                    {
                        "placeId": "ChIJ-RDJ5ircmUcRxhXi778KC2o"
                    },
                    {
                        "placeId": "ChIJq287FivcmUcRiFOK7vPPbyI"
                    },
                    {
                        "placeId": "ChIJufdqWDbcmUcR3q68Ej032Tw"
                    },
                    {
                        "placeId": "ChIJg3fRTTbcmUcR1CNqvQP_eHs"
                    },
                    {
                        "placeId": "ChIJa9-L4DfcmUcRk3WHpSz1kcw"
                    },
                    {
                        "placeId": "ChIJR-ZZAUjcmUcRZ5rRvlYGdtI"
                    },
                    {
                        "placeId": "ChIJR-ZZAUjcmUcRwnki7njx-wU"
                    },
                    {
                        "placeId": "ChIJUXe5lkfcmUcREhD3kSLg57w"
                    },
                    {
                        "placeId": "ChIJ5YVlJV3cmUcRVAzzhNUdr2Q"
                    },
                    {
                        "placeId": "ChIJWzvFnl3cmUcRiPukbil7bZk"
                    },
                    {
                        "placeId": "ChIJfYjil2bcmUcRtPVlfjkMmBs"
                    },
                    {
                        "placeId": "ChIJ6Z2FIGTcmUcRJj8sqgSaCg8"
                    },
                    {
                        "placeId": "ChIJky_mIGTcmUcRDVQSvAEl-R8"
                    },
                    {
                        "placeId": "ChIJky_mIGTcmUcRchIM1L31YVE"
                    },
                    {
                        "placeId": "ChIJDbjaIGTcmUcRkauqaZUPP1c"
                    },
                    {
                        "placeId": "ChIJn4FIJmTcmUcRceOJGQV6Ppc"
                    },
                    {
                        "placeId": "ChIJ7RMT1GXcmUcROfKUqfmOOwg"
                    },
                    {
                        "placeId": "ChIJb958CmbcmUcRy1Ta4-TIdrE"
                    },
                    {
                        "placeId": "ChIJP3l-DmbcmUcRZK002VhkOjg"
                    },
                    {
                        "placeId": "ChIJkd4DDmbcmUcRxWwHg5-qbOY"
                    },
                    {
                        "placeId": "ChIJl3mEEWbcmUcRtyGAH1hYYX8"
                    },
                    {
                        "placeId": "ChIJxb5JPWbcmUcRkLfQVsEnkVg"
                    },
                    {
                        "placeId": "ChIJeTPwJWbcmUcRz748rwyG22k"
                    },
                    {
                        "placeId": "ChIJ0whFKGbcmUcRiMLuAjEF5yc"
                    },
                    {
                        "placeId": "ChIJ8V1BhmjcmUcRLe3clwwa6OQ"
                    },
                    {
                        "placeId": "ChIJy9bFYWjcmUcR_gE2YdGqH3o"
                    },
                    {
                        "placeId": "ChIJvTqBYGjcmUcRh81sbHgd7oQ"
                    },
                    {
                        "placeId": "ChIJn6wOXGjcmUcRn1yhV_ouys0"
                    },
                    {
                        "placeId": "ChIJKaHmT2jcmUcRZJHDi-w4CbU"
                    },
                    {
                        "placeId": "ChIJcXyaS2jcmUcRDdFp3eLbp_w"
                    },
                    {
                        "placeId": "ChIJW57jymncmUcRQlnccrg3eeU"
                    },
                    {
                        "placeId": "ChIJa-6Dy2ncmUcRLk2iTI2qWoI"
                    },
                    {
                        "placeId": "ChIJz_WVzWncmUcRUIBUtKiQukI"
                    },
                    {
                        "placeId": "ChIJD4_i02ncmUcRDyZNhB55Z00"
                    },
                    {
                        "placeId": "ChIJdbWp1mncmUcRrq4fpjb3pzY"
                    },
                    {
                        "placeId": "ChIJSfjV1WncmUcRLJnxllkzkI4"
                    },
                    {
                        "placeId": "ChIJI6YO1mncmUcRH-Svd56nUgg"
                    },
                    {
                        "placeId": "ChIJo1Mz1mncmUcR94m8k0xaTBw"
                    },
                    {
                        "placeId": "ChIJUzqveULcmUcRUr-o07JDIr8"
                    }
                ],
                "source": "INFERRED",
                "travelMode": "DRIVE",
                "waypoints": [
                    {
                        "latE7": 494874191,
                        "lngE7": 84895086
                    },
                    {
                        "latE7": 489459075,
                        "lngE7": 84942960
                    },
                    {
                        "latE7": 487419357,
                        "lngE7": 91032743
                    }
                ]
            }
        },
        "sessionId": "a0f45a3c-a0ce-4dcb-9617-207ae3b30767"
    }
]

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("does render map component if locationschecked is true, routeChecked is true and data is available", () => {
    render(<MapComponent locationChecked={true} routeChecked={true} locations={testDataLocations} routes={testDataRoutes}></MapComponent>, container)
});

it("does render map component if locationschecked is true, routeChecked is false and data is available", () => {
    render(<MapComponent locationChecked={true} routeChecked={false} locations={testDataLocations} routes={testDataRoutes}></MapComponent>, container)
});

it("does render map component if locationschecked is false, routeChecked is true and data is available", () => {
    render(<MapComponent locationChecked={false} routeChecked={true} locations={testDataLocations} routes={testDataRoutes}></MapComponent>, container)
});

it("does render map component if locationschecked is false, routeChecked is false and data is available", () => {
    render(<MapComponent locationChecked={false} routeChecked={false} locations={testDataLocations} routes={testDataRoutes}></MapComponent>, container)
});

it("does render map component if locationschecked is true, routeChecked is true and data is not available", () => {
    render(<MapComponent locationChecked={true} routeChecked={true} locations={[]} routes={[]}></MapComponent>, container)
});