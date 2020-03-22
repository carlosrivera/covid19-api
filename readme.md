# The API 🦠
Simple API wrapper from Johns Hopkins University maintained datasets.

Te objective is to provide a handy way to access fresh data about COVID-19 pandemic in a REST way. Currently only time series are implemented.

## Endpoints

### /api/v1/timeseries/confirmed
*Returns* All confirmed cases.

### /api/v1/timeseries/deaths
*Returns* All deaths cases.

### /api/v1/timeseries/recovered
*Returns* All recovered cases.

### /api/v1/timeseries/confirmed/after-zero
*Returns* All confirmed cases after +100 confirmed cases on a single day.

### /api/v1/timeseries/deaths/after-zero
*Returns* All deaths cases after +100 confirmed cases on a single day..

### /api/v1/timeseries/recovered/after-zero
*Returns* All recovered cases after +100 confirmed cases on a single day..

## Data Sources
https://github.com/CSSEGISandData/COVID-19

## License
MIT
