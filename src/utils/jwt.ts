import jwt from "jsonwebtoken";

interface User {
  id: string;
  username: string | null;
}

const secretKey = process.env.JWT_KEY;

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

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error("Invalid token");
  }
};
