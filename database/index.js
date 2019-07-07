// Dependencies: nedb
const Datastore = require('nedb');

class Database {
  
    constructor() {
        // Employees Table
        this.employees = new Datastore('./database/employees.db');
        
        // Customers Table
        this.customers = new Datastore('./database/customers.db');

        // Load Tables
        this.loadTables();
    }
    
    loadTables() {
        this.employees.loadDatabase();
        this.customers.loadDatabase();

    }

    insert(table, data) {
        switch(table) {
            case "employees": 
            case "customers":
                    this[table].insert(data); break;
        }
    }

}

module.exports = Database;