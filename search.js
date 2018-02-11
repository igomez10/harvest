var axios = require("axios");
var offers = require('./strains.json')

var search = function(searchQuery) {
  var result = offers.filter(offer => searchQuery.farmer.minRating < offer.farmer.rating);
  result = result.filter(offer => searchQuery.farmer.maxRating > offer.farmer.rating);
  result = result.filter(offer => searchQuery.farmer.type.every(i => offer.farmer.type.includes(i)));
  result = result.filter(offer => offer.farmer.name.includes(searchQuery.farmer.name));
  result = result.filter(offer => offer.farmer.location.includes(searchQuery.farmer.location));
  result = result.filter(offer => offer.type.includes(searchQuery.type));
  result = result.filter(offer => offer.stage.includes(searchQuery.stage));
  result = result.filter(offer => searchQuery.minPricePerUnit < offer.price_per_unit);
  result = result.filter(offer => searchQuery.maxPricePerUnit > offer.price_per_unit);
  result = result.filter(offer => offer.unit_size.includes(searchQuery.unitSize));
  result = result.filter(offer => searchQuery.minNumberOfUnits < offer.number_of_units);
  result = result.filter(offer => searchQuery.maxNumberOfUnits > offer.number_of_units);
  result = result.filter(offer => searchQuery.effects.positive.every(i => offer.effects.positive.includes(i)));
  result = result.filter(offer => searchQuery.effects.negative.every(i => offer.effects.negative.includes(i)));
  result = result.filter(offer => searchQuery.effects.medical.every(i => offer.effects.medical.includes(i)));
  result = result.filter(offer => searchQuery.measurements.minThc < offer.measurements.thc);
  result = result.filter(offer => searchQuery.measurements.maxThc > offer.measurements.thc);





  return (result)
}


var dummyObjectSearch = {
  "farmer": {
    "minRating": 0,
    "maxRating": 5,
    "type": ["outdoor"],
    "name": '',
    "location": ""
  },
  "type": "",
  "stage": "",
  "minPricePerUnit": 0,
  "maxPricePerUnit": 1000000,
  "unitSize": "square foot",
  "minNumberOfUnits": 0,
  "maxNumberOfUnits": 100000,
  "effects": {
    "positive":[],
    "negative":[],
    "medical": []
  },
  "measurements": {
    "minThc": 0,
    "maxThc": 10
  }
}

console.log(search(dummyObjectSearch))
