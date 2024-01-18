const express = require('express');
const StorageUnitController = require('../controllers/StorageUnitController');

const router = express.Router();

router.route('/')
.get(StorageUnitController.getStorageUnits)
.post(StorageUnitController.createStorageUnit);


router.route('/:id')
.get(StorageUnitController.getUnit)
.delete(StorageUnitController.deleteStorageUnit)




module.exports = router;