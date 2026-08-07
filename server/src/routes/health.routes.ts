import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/", (req, res) => {
  res.send("Express Okay")
});

router.get("/db", async (req, res) => {

  try {
    await mongoose.connection.db!.admin().ping();
    res.send("Ping reached")
  } catch (error) {
    console.error("Could not catch error", error)
  }

});

router.get("/all", async (req, res) => {

  try {

    const databaseHealth = mongoose.connection.readyState;

    const health = {
      server: "ok",
      database: databaseHealth === 1
        ? "connected"
        : databaseHealth === 0
          ? "disconnected"
          : "connecting",
    };

    const isHealthy = databaseHealth === 1;

    res.status(isHealthy ? 200 : 503).json(health)

  } catch (error) {
    res.status(500).json({
      server: "ok",
      database: "error"
    })
  }



})

export default router