const Datastore = require('nedb');

const db = new Datastore('../../database/employees');
db.insert({emp: "emp2"});