import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Importing routes
import authRoutes from "./routes/authRoutes.js";
import songRoutes from "./routes/songRoutes.js";
import playlistRoutes from "./routes/playlistRoutes.js";
import { getSongs, streamSong } from "./controllers/songController.js";
import { userJwtMiddleware } from "./middlewares/authMiddleware.js";
import conn from "./config/db.js";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('../dist'));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/song", userJwtMiddleware, songRoutes);
app.use("/api/v1/playlist", userJwtMiddleware, playlistRoutes);
app.get("/api/v1/stream/:filename", streamSong);
app.get('/api/v1/songs', getSongs);

// Send HTML file for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve('../dist/index.html'));
});

// Listen to the server
app.listen(1337, () => {
  console.log(`Server is running at http://localhost:1337`);
});
