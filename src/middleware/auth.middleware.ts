import jwt from "jsonwebtoken";

export const authenticate = (req:any, res:any, next:any) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Forbiden access" });
  }

  if (!process.env.JWT_SECRET_KEY) {
    return res.status(500).json({ error: "JWT_SECRET_KEY not configured" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid token or expired" });
  }
};