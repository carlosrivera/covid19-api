var express = require('express');
var router = express.Router();
var csv = require('../helpers/csv');

const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_time_series/',
});

const CONFIRMED_URI = '/time_series_19-covid-Confirmed.csv';
const DEATHS_URI = '/time_series_19-covid-Deaths.csv';
const RECOVERED_URI = '/time_series_19-covid-Recovered.csv';

/* GET confirmed listing. */
router.get('/confirmed', function(req, res, next) {
  instance.get(CONFIRMED_URI)
    .then(function (response) {
      // handle success
      res.json(csv.timeseriesResponseToJson(response.data));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

/* GET deaths listing. */
router.get('/deaths', function(req, res, next) {
  instance.get(DEATHS_URI)
    .then(function (response) {
      // handle success
      res.json(csv.timeseriesResponseToJson(response.data));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

/* GET recovered listing. */
router.get('/recovered', function(req, res, next) {
  instance.get(RECOVERED_URI)
    .then(function (response) {
      // handle success
      res.json(csv.timeseriesResponseToJson(response.data));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

/* GET confirmed listing. */
router.get('/confirmed/after-zero', function(req, res, next) {
  instance.get(CONFIRMED_URI)
    .then(function (response) {
      // handle success
      res.json(csv.timeseriesResponseToJson(response.data, true));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

/* GET deaths listing. */
router.get('/deaths/after-zero', function(req, res, next) {
  instance.get(DEATHS_URI)
    .then(function (response) {
      // handle success
      res.json(csv.timeseriesResponseToJson(response.data, true));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

/* GET recovered listing. */
router.get('/recovered/after-zero', function(req, res, next) {
  instance.get(RECOVERED_URI)
    .then(function (response) {
      // handle success
      res.json(csv.timeseriesResponseToJson(response.data, true));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

module.exports = router;
