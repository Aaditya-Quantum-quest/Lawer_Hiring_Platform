const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const { generateTokens } = require('../utils/jwt');

const prisma = new PrismaClient();

const registerUser = async (req, res) => {
  const { email, phone, password, full_name, role } = req.body;

  try {
    // Check if user exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email || '' },
          { phone: phone || '' }
        ]
      }
    });

    if (existingUser) {
      return res.status(409).json({ message: 'User with this email or phone already exists' });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        phone,
        password_hash,
        full_name,
        role: role || 'CLIENT'
      }
    });

    // If lawyer, create placeholder profile
    if (newUser.role === 'LAWYER') {
      await prisma.lawyerProfile.create({
        data: {
          user_id: newUser.id
        }
      });
    }

    if (newUser.role === 'CLIENT') {
      await prisma.clientProfile.create({
        data: {
          user_id: newUser.id
        }
      });
    }

    const { accessToken, refreshToken } = generateTokens(newUser.id, newUser.role);

    res.status(201).json({
      message: 'User registered successfully',
      accessToken,
      refreshToken,
      user: {
        id: newUser.id,
        full_name: newUser.full_name,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

const loginUser = async (req, res) => {
  const { identifier, password } = req.body; // identifier can be email or phone

  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { phone: identifier }
        ]
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const { accessToken, refreshToken } = generateTokens(user.id, user.role);

    res.status(200).json({
      message: 'Logged in successfully',
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        full_name: user.full_name,
        role: user.role
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

module.exports = {
  registerUser,
  loginUser
};
