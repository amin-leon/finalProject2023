import jwt from 'jsonwebtoken';


const validateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Invalid or missing token' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token,  process.env.SECRET_ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      console.log('Error in token verification:', err.message);
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
};


export default validateToken;
