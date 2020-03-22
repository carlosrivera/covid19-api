'use strict';

const timeseriesResponseToJson = (response, afterZero = false) => {
  let commaRegex = /,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g;
  let quotesRegex = /^"(.*)"$/g;

  let lines=response.replace('\r', '').split('\n');
  let headers=lines[0].split(commaRegex).map(h => h.replace(quotesRegex, '$1'));
  let result = {};

  for (let i=1; i < lines.length; i++) {
    let currentline = lines[i].split(commaRegex);
    let obj = {};

    if (currentline[1] in result) {
      for (let j=4; j < headers.length; j++) {
        result[currentline[1]]['Daily Cases'][headers[j]] += parseInt(currentline[j]);
      }
    } else {
      for (let j=2; j < headers.length; j++) {
        if (!('Daily Cases' in obj))
          obj['Daily Cases'] = {};

        if (j > 3) {
          obj['Daily Cases'][headers[j]] = parseInt(currentline[j]);
        } else {
          obj[headers[j]] = parseFloat(currentline[j]);
        }
      }

      result[currentline[1]] = obj;
    }
  }

  if (afterZero != true) {
    return result;
  }

  let afterResult = {};

  Object.keys(result).forEach((item, i) => {
    let afterZeroCounter = 0;
    let obj = {};

    Object.keys(result[item]['Daily Cases']).forEach((caseDate, i) => {

      if (result[item]['Daily Cases'][caseDate] > 100 || afterZeroCounter > 0) {
        if (!('Daily Cases' in obj))
          obj['Daily Cases'] = {};

        obj['Daily Cases'][caseDate] = result[item]['Daily Cases'][caseDate];

        afterZeroCounter++;
      }
    });

    if (afterZeroCounter) {
      obj['Lat'] = result[item]['Lat'];
      obj['Long'] = result[item]['Long'];

      afterResult[item] = obj;
    }

  });


  return afterResult;
};

module.exports = {
  timeseriesResponseToJson: timeseriesResponseToJson
};
