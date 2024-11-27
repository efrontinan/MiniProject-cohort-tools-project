const mongoose = require('mongoose')

const databaseName = 'cohort-tools-api'
const connectionString = `mongodb://127.0.0.1:27017/${databaseName}`


mongoose
    .connect(connectionString)
    .then(connectionInfo => console.log(`Connected to Mongo! Database name:"${connectionInfo.connections[0].name}"`))