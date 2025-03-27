import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../entity/User.js";

class AuthService {
  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  static async comparePasswords(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  // Générer un token JWT
  static async generateToken(user: User): Promise<string> {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }

    const options = { expiresIn: "24h" } as jwt.SignOptions;

    return jwt.sign(payload, secret, options);
  }

  static async verifyToken(token: string): Promise<any> {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }
    return jwt.verify(token, secret);
  }
}

export default AuthService;
