const express = require('express');
const {
  createCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
} = require('../controllers/carController');

const router = express.Router();

router.route('/').get(getCars).post(createCar);

router.route('/:id').get(getCarById).patch(updateCar).delete(deleteCar);

module.exports = router;