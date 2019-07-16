const express = require("express");
const router = express.Router();
Rental = require("../models/rental");

router.get("", (req, res) => {
  Rental.find({}, (error, data) => {
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  const rentalId = req.params.id;
  Rental.findById(rentalId, (error, data) => {
    if (error) {
      res.status(422).send({ Error: "No Rental Exist with Id " + rentalId });
    }
    res.json(data);
  });
});
module.exports = router;
