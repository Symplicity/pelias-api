
var generator = require('../../../helper/labelGenerator');

module.exports.tests = {};

module.exports.tests.interface = function(test, common) {
  test('interface', function(t) {
    t.equal(typeof generator, 'function', 'valid function');
    t.end();
  });
};

// major USA city
module.exports.tests.san_francisco = function(test, common) {
  test('san francisco', function(t) {
    var doc = {
      'name': { 'default': 'San Francisco' },
      'country_a': 'USA',
      'country': 'United States',
      'region': 'California',
      'region_a': 'CA',
      'county': 'San Francisco County',
      'locality': 'San Francisco'
    };
    t.equal(generator(doc),'San Francisco, San Francisco County, CA');
    t.end();
  });
};

// USA venue
module.exports.tests.nyc_office = function(test, common) {
  test('30 West 26th Street', function(t) {
    var doc = {
      'name': { 'default': '30 West 26th Street' },
      'housenumber': '30',
      'street': 'West 26th Street',
      'postalcode': '10010',
      'country_a': 'USA',
      'country': 'United States',
      'region': 'New York',
      'region_a': 'NY',
      'county': 'New York County',
      'localadmin': 'Manhattan',
      'locality': 'New York',
      'neighbourhood': 'Flatiron District'
    };
    t.equal(generator(doc),'30 West 26th Street, Manhattan, NY');
    t.end();
  });
};

// USA venue
module.exports.tests.nyc_office = function(test, common) {
  test('30 West 26th Street', function(t) {
    var doc = {
      'name': { 'default': '30 West 26th Street' },
      'housenumber': '30',
      'street': 'West 26th Street',
      'postalcode': '10010',
      'country_a': 'USA',
      'country': 'United States',
      'region': 'New York',
      'region_a': 'NY',
      'county': 'New York County',
      'localadmin': 'Manhattan',
      'locality': 'New York',
      'neighbourhood': 'Flatiron District'
    };
    t.equal(generator(doc),'30 West 26th Street, Manhattan, NY');
    t.end();
  });
};

// AUS state
module.exports.tests.new_south_wales = function(test, common) {
  test('new south wales', function(t) {
    var doc = {
      'name': { 'default': 'New South Wales' },
      'country_a': 'AUS',
      'country': 'Australia',
      'region': 'New South Wales'
    };
    t.equal(generator(doc),'New South Wales, Australia');
    t.end();
  });
};

// USA state
module.exports.tests.california = function(test, common) {
  test('california', function(t) {
    var doc = {
      'name': { 'default': 'California' },
      'country_a': 'USA',
      'country': 'United States',
      'region': 'California',
      'region_a': 'CA'
    };
    t.equal(generator(doc),'California, CA');
    t.end();
  });
};

// IND state
module.exports.tests.west_bengal = function(test, common) {
  test('west bengal', function(t) {
    var doc = {
      'name': { 'default': 'West Bengal' },
      'country_a': 'IND',
      'country': 'India',
      'region': 'West Bengal'
    };
    t.equal(generator(doc),'West Bengal, India');
    t.end();
  });
};

// SGP region
module.exports.tests.north_west_singapore = function(test, common) {
  test('north west singapore', function(t) {
    var doc = {
      'name': { 'default': 'North West' },
      'country_a': 'SGP',
      'country': 'Singapore',
      'region': 'North West'
    };
    t.equal(generator(doc),'North West, Singapore');
    t.end();
  });
};

// IRQ region
module.exports.tests.arbil = function(test, common) {
  test('arbil', function(t) {
    var doc = {
      'name': { 'default': 'Arbil' },
      'country_a': 'IRQ',
      'country': 'Iraq',
      'region': 'Arbil'
    };
    t.equal(generator(doc),'Arbil, Iraq');
    t.end();
  });
};

// ESP city
module.exports.tests.madrid = function(test, common) {
  test('madrid', function(t) {
    var doc = {
      'name': { 'default': 'Madrid' },
      'country_a': 'ESP',
      'country': 'Spain',
      'region': 'Madrid'
    };
    t.equal(generator(doc),'Madrid, Spain');
    t.end();
  });
};

// GBR street address
module.exports.tests.one_main_street_uk = function(test, common) {
  test('one main street uk', function(t) {
    var doc = {
      'name': { 'default': '1 Main St' },
      'housenumber': '1',
      'street': 'Main St',
      'postalcode': 'BT77 0BG',
      'country_a': 'GBR',
      'country': 'United Kingdom',
      'region': 'Dungannon'
    };
    t.equal(generator(doc),'1 Main St, Dungannon, United Kingdom');
    t.end();
  });
};

// GBR venue
module.exports.tests.hackney_city_farm = function(test, common) {
  test('hackney city farm', function(t) {
    var doc = {
      'name': { 'default': 'Hackney City Farm' },
      'country_a': 'GBR',
      'country': 'United Kingdom',
      'region': 'Hackney',
      'county': 'Greater London',
      'locality': 'London',
      'neighbourhood': 'Haggerston'
    };
    t.equal(generator(doc),'Hackney City Farm, Haggerston, Greater London');
    t.end();
  });
};

// DEU street address
module.exports.tests.one_grolmanstrasse = function(test, common) {
  test('one grolmanstrasse', function(t) {
    var doc = {
      'name': { 'default': '1 Grolmanstraße' },
      'housenumber': '1',
      'street': 'Grolmanstraße',
      'postalcode': '10623',
      'country_a': 'DEU',
      'country': 'Germany',
      'region': 'Berlin',
      'county': 'Berlin',
      'locality': 'Berlin',
      'neighbourhood': 'Halensee'
    };
    t.equal(generator(doc),'1 Grolmanstraße, Berlin, Germany');
    t.end();
  });
};

// NZD country
module.exports.tests.new_zealand = function(test, common) {
  test('new zealand', function(t) {
    var doc = {
      'name': { 'default': 'New Zealand' },
      'country_a': 'NZL',
      'country': 'New Zealand'
    };
    t.equal(generator(doc),'New Zealand');
    t.end();
  });
};

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('label generator: ' + name, testFunction);
  }

  for( var testCase in module.exports.tests ){
    module.exports.tests[testCase](test, common);
  }
};