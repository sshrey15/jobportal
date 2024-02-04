// /pages/api/verifyToken.js
import jwt from 'jsonwebtoken'

export default function handler(req, res) {
  const token = req.cookies.jwt;

  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json({ valid: true });
    } catch (err) {
      console.error('JWT is not valid', err);
      res.status(200).json({ valid: false });
    }
  } else {
    console.log('No JWT present');
    res.status(200).json({ valid: false });
  }
}