# The API 🦠
Simple API wrapper from Johns Hopkins University maintained datasets.

Te objective is to provide a handy way to access fresh data about COVID-19 pandemic in a REST way. Currently only time series are implemented.

[Demo and hosted API](https://covid-19-api-jhu.herokuapp.com/).

<p align="center"><a href="https://covid-19-api-jhu.herokuapp.com/"><img width=75% alt="" src="https://covid-19-api-jhu.herokuapp.com/images/preview.png"></a></p>

## Endpoints

```
/api/v1/timeseries/confirmed
```

*Returns* All confirmed cases.

```
/api/v1/timeseries/deaths
```
*Returns* All deaths cases.

```
/api/v1/timeseries/recovered
```
*Returns* All recovered cases.

```
/api/v1/timeseries/confirmed/after-zero
```
*Returns* All confirmed cases after +100 confirmed cases on a single day.

```
/api/v1/timeseries/deaths/after-zero
```
*Returns* All deaths cases after +100 confirmed cases on a single day..

```
/api/v1/timeseries/recovered/after-zero
```
*Returns* All recovered cases after +100 confirmed cases on a single day..

## Data Sources
Original data from [Johns Hopkins University](https://github.com/CSSEGISandData/COVID-19)

## License
MIT
