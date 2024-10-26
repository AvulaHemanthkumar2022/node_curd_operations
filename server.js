const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

dotEnv.config();

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB is connected successfully');
})
.catch((error) => {
    console.log(`${error}`);
});

app.use('/employe', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is started and running at Port number ${PORT}`);
});
