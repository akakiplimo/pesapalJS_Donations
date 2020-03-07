const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Transaction = require('./models/transaction');

const app = express();

mongoose.connect("mongodb+srv://adriank:Yr81p3OEx1gy3nXy@cluster0-wl8jv.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connection to DB is Successful")
  })
  .catch(() => {
    console.log("Connection Failed!!")
  });

const PesaPal = require('pesapaljs').init({
    key: 'HYpi5f9wzx22vEvLoFyx7//aEkLK8fJp',
    secret: '4EcCbzXqYo9CYZsIkU1GhWVimkA=',
    debug: false // false in production!
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
                "GET, POST, DELETE, OPTIONS"
  );
  next();
});

app.post('/addKeys', (req, res, next) => {
  console.log(req.body);
  PesaPal.key = req.body.consumerKey;
  PesaPal.secret = req.body.consumerSecret;

  console.log(PesaPal.key);
  res.status(200).json({
    cKey:PesaPal.key,
    cSecret:PesaPal.secret
  });
});

app.get('/getKeys', (req, res, next) => {
  res.status(200).json({
    cKey:PesaPal.key,
    cSecret:PesaPal.secret

  });
});

app.post('/pesapalRedirect', (req, res, next) => {
  const customer = new PesaPal.Customer(req.body.email || req.body.phoneNumber);
  const donation = new PesaPal.Order(req.body.refNumber, customer, "donation", req.body.amount, "KES", req.body.type);
  const url = PesaPal.getPaymentURL(donation, "http://localhost:4200/success");

  const transaction = new Transaction({
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    refNumber: req.body.refNumber,
    amount: req.body.amount,
    type: req.body.type
  });
  transaction.save();
  console.log(transaction);

  console.log(url);
  console.log(req.body);

  res.status(201).json({
    url : url
  });

});


app.get('/getPesapalTransactionRecords', (req, res, next) => {
  Transaction.find().then(documents => {
    console.log("My Records are: ", documents);

    res.status(200).json({
      message : "Transaction data fetched successfully",
      documents: documents
    });
  });

});



module.exports = app;
