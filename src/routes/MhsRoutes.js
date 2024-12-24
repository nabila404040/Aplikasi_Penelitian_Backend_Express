const express = require('express');
const router = express.Router();
const penelitianController = require('../controllers/MhsController');

router.get('/penelitian', penelitianController.getpenelitian);
router.post('/penelitian/insert',penelitianController.insertpenelitian);
router.put('/penelitian/update/:id',penelitianController.updatepenelitian);
router.delete('/penelitian/delete/:id',penelitianController.deletepenelitian);

module.exports = router;