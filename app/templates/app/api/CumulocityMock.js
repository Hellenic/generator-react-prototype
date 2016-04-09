import moment from 'moment';

class CumulocityMock {

  // Return generated data in Cumulocity format
  static getMeasurements(type, sourceId, from, amount, valueDesc)
  {
    let measurements = [];

    // Generated time, somewhere between from and to values, depending on current index
    let timeAgoValue = parseInt(from.split(' ')[0]);
    let timeAgoUnit = from.split(' ')[1];
    let momentAgo = moment().subtract(timeAgoValue, timeAgoUnit);
    let momentRange = moment() - momentAgo;
    let rangeFraction = momentRange.valueOf() / amount;

    for (let i=0; i<amount; i++)
    {
      let id = 1000000 + i;

      let measurement = {
        'id': id,
        'self': 'http://hacktindi.cumulocity.com/measurement/measurements/' + id,
        'source': {
          'id': sourceId,
          'self': 'http://hacktindi.cumulocity.com/inventory/managedObjects/' + sourceId
        },
        'type': type
      };

      // Get fraction of the time range, add it 'from' moment and format
      measurement.time = momentAgo.add(rangeFraction, 'milliseconds').format('YYYY-MM-DD[T]HH:mm:ssZ');

      // Generate measurent value based on given description
      let base = valueDesc.max - valueDesc.min;
      let value = Math.floor(Math.random()*base * 100) / 100 + valueDesc.min;

      // Create measurement value object
      measurement[type] = {};
      measurement[type][valueDesc.type] = {'unit': valueDesc.unit, 'value': value};

      measurements.push(measurement);
    }

    return measurements;
  }

}

export default CumulocityMock;
