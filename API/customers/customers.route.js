const express = require("express");
const router = express.Router();
const Customers = require("./customers.model");

router.get('/', (req, res) => {
    Customers
        .findCustomers()
        .then((customer) => res.status(200).json({customers: customer}))
        .catch(err => res.status(500).json({message: err.message}))
});

router.post('/', (req, res) => {
    const customer = req.body;
    Customers.addCustomer(customer)
        .then((customer) => res.status(201).json({customers: customer}))
        .catch(err => res.status(500).json({message: err.message}))
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    Customers
        .deleteCustomer(id)
        .then(customer => res.status(201).json({customer: customer}))
        .catch(err => res.status(500).json({message: err.message}))
});

module.exports = router;