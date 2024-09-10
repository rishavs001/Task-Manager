const jwt = require("jsonwebtoken");

const authorizationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  
  if (!token) {
   
    return res.status(401).json({ message: "User Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403);
    req.user = user;
    next();
  });
};
module.exports = [authorizationToken];
