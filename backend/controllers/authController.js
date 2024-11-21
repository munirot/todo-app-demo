const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  let {username, email, password} = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ username, email, password });

    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const loginUser = async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { registerUser, loginUser };
