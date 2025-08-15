const Car = require('../models/Car');

// @desc    Create a car
// @route   POST /api/cars
// @access  Public
exports.createCar = async (req, res, next) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json({
      success: true,
      data: car,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get all cars
// @route   GET /api/cars
// @access  Public
exports.getCars = async (req, res, next) => {
  try {
    const cars = await Car.find();
    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Get single car
// @route   GET /api/cars/:id
// @access  Public
exports.getCarById = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update car
// @route   PATCH /api/cars/:id
// @access  Public
exports.updateCar = async (req, res, next) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!car) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete car
// @route   DELETE /api/cars/:id
// @access  Public
exports.deleteCar = async (req, res, next) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({ success: false, error: 'Car not found' });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};