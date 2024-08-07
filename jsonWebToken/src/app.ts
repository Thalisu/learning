import express, { json } from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import { getSecret } from "./config";

const app = express();

app.use(helmet());
app.use(json());

app.get("/auth", (req, res) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    const secret = getSecret();

    if (!token) {
      throw new Error("token is missing");
    }

    jwt.verify(token, secret);

    const payload = jwt.decode(token);

    res.status(200).json(payload);
  } catch (error) {
    return res.status(403).json(error);
  }
});

app.post("/login", (req, res) => {
  const secret = getSecret();
  if (process.env.JWT_SECRET) {
    const token = jwt.sign({ id: 1 }, secret, { expiresIn: "24h" });
    return res.status(200).json({ accessToken: token });
  }
});

export default app;
