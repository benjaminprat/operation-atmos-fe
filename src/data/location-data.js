const locationData = [
  {
    "status": "success",
    "data": {
      "city": "Thornton",
      "state": "Colorado",
      "country": "USA",
      "location": {
        "type": "Point",
        "coordinates": [
            -104.97192,
            39.86804
        ]
      },
      "current": {
        "weather": {
          "ts": "2021-02-24T02:00:00.000Z",
          "tp": 7,
          "pr": 1013,
          "hu": 25,
          "ws": 7.72,
          "wd": 250,
          "ic": "03d"
        },
        "pollution": {
          "ts": "2021-02-24T02:00:00.000Z",
          "aqius": 4,
          "mainus": "p2",
          "aqicn": 1,
          "maincn": "p2"
        }
      }
    }
  },
  {
    "status": "success",
    "data": {
      "city": "Denver",
      "state": "Colorado",
      "country": "USA",
      "location": {
        "type": "Point",
        "coordinates": [
            -104.97192,
            39.86804
        ]
      },
      "current": {
        "weather": {
          "ts": "2021-02-24T02:00:00.000Z",
          "tp": 7,
          "pr": 1013,
          "hu": 25,
          "ws": 7.72,
          "wd": 250,
          "ic": "01n"
        },
        "pollution": {
          "ts": "2021-02-24T02:00:00.000Z",
          "aqius": 50,
          "mainus": "p2",
          "aqicn": 1,
          "maincn": "p2"
        }
      }
    }
  },
  {
    "status": "success",
    "data": {
      "city": "Boulder",
      "state": "Colorado",
      "country": "USA",
      "location": {
        "type": "Point",
        "coordinates": [
            -104.97192,
            39.86804
        ]
      },
      "current": {
        "weather": {
          "ts": "2021-02-24T02:00:00.000Z",
          "tp": 7,
          "pr": 1013,
          "hu": 25,
          "ws": 7.72,
          "wd": 250,
          "ic": "01d"
        },
        "pollution": {
          "ts": "2021-02-24T02:00:00.000Z",
          "aqius": 105,
          "mainus": "p2",
          "aqicn": 1,
          "maincn": "p2"
        }
      }
    }
  },
  {
    "status": "success",
    "data": {
      "city": "Breckenridge",
      "state": "Colorado",
      "country": "USA",
      "location": {
        "type": "Point",
        "coordinates": [
            -104.97192,
            39.86804
        ]
      },
      "current": {
        "weather": {
          "ts": "2021-02-24T02:00:00.000Z",
          "tp": 7,
          "pr": 1013,
          "hu": 25,
          "ws": 7.72,
          "wd": 250,
          "ic": "09d"
        },
        "pollution": {
          "ts": "2021-02-24T02:00:00.000Z",
          "aqius": 198,
          "mainus": "p2",
          "aqicn": 1,
          "maincn": "p2"
        }
      }
    }
  }
]

const cityData = {
  "status": "success",
  "data": [
    {"city": "Denver"},
    {"city": "Thornton"},
    {"city": "Breckenridge"},
    {"city": "Boulder"}
  ]
}

const stateData = {
  "status": "success",
  "data": [
    {"state": "Colorado"},
    {"state": "Utah"}
  ]
}

export default { locationData, cityData, stateData }