'use strict';

const timeseriesResponseToJson = (response, afterZero = false) => {
  let commaRegex = /,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g;
  let quotesRegex = /^"(.*)"$/g;

  let lines=response.replace('\r', '').split('\n');
  let headers=lines[0].split(commaRegex).map(h => h.replace(quotesRegex, '$1'));
  let result = {};

  for(let i=1; i < lines.length; i++) {
    let currentline = lines[i].split(commaRegex);
    let obj = {};
    let afterZeroCounter = 0;

    if (currentline[1] in result) {
      for(let j=4; j < headers.length; j++) {
        if (afterZero) {
          result[currentline[1]]['Daily Cases'][afterZeroCounter] = parseInt(currentline[j]);

          afterZeroCounter++;
        } else {
          result[currentline[1]]['Daily Cases'][headers[j]] += parseInt(currentline[j]);
        }
      }
    } else {
      for(let j=2; j < headers.length; j++) {
        if (afterZero) {
          if (j < 4) {
            obj[headers[j]] = (j > 1)
              ? parseFloat(currentline[j])
              : currentline[j]
          } else {
            if (parseInt(currentline[j]) > 100) {
              if (afterZeroCounter == 0)
                obj['Day Zero'] = headers[j];

              if (!('Daily Cases' in obj))
                obj['Daily Cases'] = {};

              obj['Daily Cases'][afterZeroCounter] = parseInt(currentline[j]);

              afterZeroCounter++;
            }
          }
        } else {
          if (!('Daily Cases' in obj))
            obj['Daily Cases'] = {};
            
          obj['Daily Cases'][headers[j]] =
          (j > 3)
            ? parseInt(currentline[j])
            : (j > 1)
              ? parseFloat(currentline[j])
              : currentline[j];
        }
      }

      (afterZero == true)
        ? (afterZeroCounter > 0)
          ? result[currentline[1]] = obj
          : () => {}
        : result[currentline[1]] = obj;
    }
  }

  return JSON.stringify(result);
};

module.exports = {
  timeseriesResponseToJson: timeseriesResponseToJson
};
