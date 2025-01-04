/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from "jsonwebtoken";

interface User {
  id: string;
  username: string | null;
}

const secretKey = process.env.JWT_KEY;
const secretRefreshToken = process.env.JWT_KEY_REFRESH_TOKEN;

if (!secretKey) {
  throw new Error("No JWT_KEY provided");
}

export const generateToken = (user: User) => {
  const payload = {
    userIdPayload: user.id,
    userUsernamePayload: user.username,
  };

  const option = { expiresIn: "1h" };

  return jwt.sign(payload, secretKey, option);
};

export const generateRefreshToken = (user: User) => {
  const payload = {
    userIdPayload: user.id,
    userUsernamePayload: user.username,
  };

  const option = { expiresIn: "7d" };

  return jwt.sign(payload, secretKey, option);
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secretKey);

    return decoded; // Mengembalikan hasil decoded jika token valid
  } catch (error: any) {
    console.error("Token verification failed:", error.message);
    return null; // Jika token tidak valid, kembalikan null
  }
};

export const verifyRefreshToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secretKey);

    return decoded; // Mengembalikan hasil decoded jika token valid
  } catch (error: any) {
    console.error("Token verification failed:", error.message);
    return null; // Jika token tidak valid, kembalikan null
  }
};
