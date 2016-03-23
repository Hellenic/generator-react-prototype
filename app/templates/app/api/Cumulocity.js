import moment from 'moment';
import axios from 'axios';
// TODO import Cumulocity from '@tindi/cumulocity-api';

var axiosCumulocity = axios.create({
  baseURL: 'https://demo.iot.tieto.com/',
  timeout: 10000,
  headers: {
    'Authorization': 'Basic #######'
  }
});

class Cumulocity {

  static getMeasurement(source, ago, type) {
    let fromAgo = (ago) ? ago : '2 hours';
    let timeAgoValue = parseInt(fromAgo.split(' ')[0]);
    let timeAgoUnit = fromAgo.split(' ')[1];

    let timeAgo = moment().subtract(timeAgoValue, timeAgoUnit).format('YYYY-MM-DD[T]HH:mm:ssZ');
    timeAgo = encodeURIComponent(timeAgo);
    let URL = `/measurement/measurements?source=${source}&dateFrom=${timeAgo}&pageSize=50&type=${type}`;

    return axiosCumulocity.get(URL);
  }

  static getMeasurementSeries(source, ago, type) {
    let fromAgo = (ago) ? ago : '2 hours';
    let timeAgoValue = parseInt(fromAgo.split(' ')[0]);
    let timeAgoUnit = fromAgo.split(' ')[1];

    let format = 'YYYY-MM-DD[T]HH:mm:ssZ';
    let timeAgo = moment().subtract(timeAgoValue, timeAgoUnit).format(format);
    let timeNow = moment().format(format);
    timeAgo = encodeURIComponent(timeAgo);
    timeNow = encodeURIComponent(timeNow);
    let URL = `/measurement/measurements/series?source=${source}&dateFrom=${timeAgo}&dateTo=${timeNow}&type=${type}`;

    return axiosCumulocity.get(URL);
  }

  static convertSeries2series(name, type, yAxis, dataArray) {

    let seriesData = Object.keys(dataArray.values).map(key => {
      let value = dataArray.values[key];
      let temperature = (value[0]) ? value[0].max : 0
      let time = moment(key);

      return [ time.valueOf(), temperature ];
    });

    return {
      name: name,
      type: type,
      yAxis: yAxis,
      data: seriesData
    };
  }

  static aggregate(series, amount) {
      let aggregated = []
      let temporary = [];

      series.data.forEach(m => {
        temporary.push(m);

        if (temporary.length > amount)
        {

          let sum = 0;
          temporary.forEach(temp => {
            sum += temp[1];
          });
          let avg = sum / temporary.length;
          let time = temporary[0][0];
          aggregated.push([ time, avg ]);
          temporary = [];
        }
      });

      series.data = aggregated;
      return series;
    }
}

export default Cumulocity;
