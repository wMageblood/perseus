import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors";
import authRoutes from "./routes/auth.routes"
import healthRoutes from "./routes/health.routes"
import appRoutes from "./routes/app.routes"
import taskRoutes from "./routes/task.routes";
import workspaceRoutes from "./routes/workspace.routes"
import { databaseConnection } from "./config/database";

const app = express();
const port = 3000;

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use(("/auth"), authRoutes);
app.use(("/health"), healthRoutes);
app.use(("/app"), appRoutes);
app.use(("/api/task"), taskRoutes);
app.use(("/api/workspace"), workspaceRoutes);

app.get("/cookie", (req, res) => {
  console.log(req.cookies)
  res.send("ok cookie")
})

const startServer = async () => {

  try {

    await databaseConnection();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    });

  } catch (error) {
    console.error(`❌ Failed to start server: ${error}`)
    process.exit(1)
  }
};

startServer();