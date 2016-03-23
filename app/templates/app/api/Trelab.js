import moment from 'moment';
import axios from 'axios';

// Trelab API is not fully CORS compliant, you'll need a proxy
var axiosTrelab = axios.create({
  // baseURL: 'https://api.trelab.fi/2',
  baseURL: 'http://localhost:4242/proxy/2',
  timeout: 10000,
  headers: {
    'Authorization': 'Basic ########'
  }
});

class Trelab {

  static getLevel()
  {
    return axiosTrelab.get('/level')
  }

  static getSmartTag(id)
  {
    return axiosTrelab.get('/smartTag/'+ id);
  }

  static getMeasurement(id, from, type, subtype)
  {
    let timeAgoValue = parseInt(from.split(' ')[0]);
    let timeAgoUnit = from.split(' ')[1];

    let timeAgo = moment().subtract(timeAgoValue, timeAgoUnit);
    let format = 'YYYY-MM-DD[T]HH:mm:ss[Z]';
    let startTime = timeAgo.format(format);
    let endTime = moment().format(format);
    let subtypeParam = (subtype) ? `&subtype=${subtype}` : '';

    return axiosTrelab.get(`/smartTag/${id}/graph?type=${type}${subtypeParam}&startTime=${startTime}&endTime=${endTime}`)
  }

  static convert2series(name, type, yAxis, dataArray) {
    let seriesData = dataArray.map(dataObj => {
      return [ dataObj.timestamp, dataObj.value ];
    });

    return {
      name: name,
      type: type,
      yAxis: yAxis,
      data: seriesData
    };
  }
}

export default Trelab;
