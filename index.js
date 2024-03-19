const express = require('express');
const mongoose = require('mongoose');
const vendorPaymentRouter = require('./routes/vendor_payment');

const config = require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

const uri = process.env.MONGODB_URI;

mongoose.connect(uri);

app.use('/T001', vendorPaymentRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost${port}`);
});