// Dependencies: express
const express = require('express');
const Datastore = require('nedb');
const logger = require('./middleware/logger');
const routes = require('./routes/api');

// Initialize express
const app = express();

// Logger middleware
app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const db = new Datastore('database/employees.db');
// db.loadDatabase();
// db.insert({tester: "custurd"});
// app.post('/api/employees', (req, res) => {
//     console.log("hello world");
//     db.insert(employees, {name: "Scott", position: "CEO"});
// });
// db.find({}, function (err, docs){
//     console.log(docs);
// });

routes.forEach(route => {
    app.use(`/api/${route}`, require(`./routes/api/${route}`));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));