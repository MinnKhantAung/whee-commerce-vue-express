import jwt from "jsonwebtoken";

export const ValidToken = async (req, res, next) => {
  let token;
  let authHeader = req.header.authorization || req.header.Authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.SECRECT_KEY, (error, decoded) => {
        if (error) {
          res.status(401).json({ message: "User is not Authorized!" });
        }
        req.user = decoded.user;
        next();
      });
    } else {
      res.status(401).json({ message: "Token is Invalid!" });
    }
  }
};
