const express = require('express');
const router = express.Router();

router.get('/' , (req,res,next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/' , (req,res,next) => {
    res.status(201).json({
        message: 'Orders were created'
    });
});

router.get('/:orderId' , (req,res,next) => {
    res.status(200).json({
        message: 'Orders details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId' , (req,res,next) => {
    res.status(200).json({
        message: 'Orders deleted'
    });
});

module.exports = router; // export it so that it can be used in files line in app.js we import routes