const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://katastronk:HsOlG2021@katastronkdb.dnye1.mongodb.net/katastronk?retryWrites=true&w=majority').then(() => {
    console.log('conexion exitosa');
    app.listen(5000);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api",route);