var db = require("../models");

module.exports = function(app) {
  // Get all customers
  app.get("/api/customer", function(req, res) {
    db.customer.findAll({}).then(function(customerData) {
      res.json(customerData);
    });
  });

  // Get all cars - Paskwa's changes
  app.get("/api/cars", function(req, res) {
    db.Car.findAll({}).then(function(dbCars) {
      res.json(dbCars);
    });
  });

  // Create a new customer
  app.post("/api/customer", function(req, res) {
    console.log("name: " + req.body.customerName);
    console.log(req.body);
    db.customer
      .create({
        customerName: req.body.customerName,
        customerDOB: req.body.customerDOB,
        customerNum: req.body.customerNum
        // customerRenting: req.body
      })
      .then(function(customerData) {
        res.json(customerData);
      });
  });

  // Create a new car - Paskwa's changes
  app.post("/api/cars", function(req, res) {
    db.Car.create(req.body).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  // Delete an example by id
  app.delete("/api/customer/:id", function(req, res) {
    db.customer
      .destroy({ where: { id: req.params.id } })
      .then(function(customerData) {
        res.json(customerData);
      });
  });

  // PUT route for updating customer info by id
  app.put("/api/customer/:id", function(req, res) {
    console.log(req.body);
    db.customer
      .update(
        {
          customerName: req.body.name,
          customerDOB: req.body.DOB,
          customerNum: req.body.num
        },
        {
          where: {
            id: req.params.id //confirmed operational
          }
        }
      )
      .then(function(customerData) {
        res.json(customerData);
      });
  });
  // Delete a car by id - Paskwa's changes
  app.delete("/api/cars/:id", function(req, res) {
    db.Car.destroy({ where: { id: req.params.id } }).then(function(dbCar) {
      res.json(dbCar);
    });
  });
};
