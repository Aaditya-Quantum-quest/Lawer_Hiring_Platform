const jwt = require('jsonwebtoken');

const generateTokens = (userId, role) => {
  const accessToken = jwt.sign(
    { userId, role },
    process.env.JWT_SECRET || 'secret123',
    { expiresIn: '15m' }
  );
  const refreshToken = jwt.sign(
    { userId, role },
    process.env.JWT_REFRESH_SECRET || 'refresh123',
    { expiresIn: '30d' }
  );

  return { accessToken, refreshToken };
};

module.exports = { generateTokens };
