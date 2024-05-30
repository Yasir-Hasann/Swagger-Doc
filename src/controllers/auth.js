// module imports
const asyncHandler = require('express-async-handler');

// file imports
const ErrorResponse = require('../utils/error-response');
const UserModel = require('../models/user');

// @desc   Login User
// @route  POST /api/v1/auth/login
// @access Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return next(new ErrorResponse('Missing fields', 400));

  const user = await UserModel.findOne({ email }).select('+password');
  const isMatched = user && password === user.password;
  if (!isMatched) return next(new ErrorResponse('Incorrect credentials', 401));
  res.status(200).json({ success: true });
});

// @desc   Register User
// @route  POST /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async (req, res, next) => {
  const user = await UserModel.create(req.body);
  res.status(201).json({ success: true });
});
