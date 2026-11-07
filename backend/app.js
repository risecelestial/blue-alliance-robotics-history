
import express from "express";
import teamsRouter from "./routes/teams.js";

const app = express();

app.use(express.json());

// Main API route
app.use("/api/teams", teamsRouter);

// Handle unknown API routes
app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "ROUTE_NOT_FOUND",
      message: "The requested API route does not exist."
    }
  });
});

// Handle invalid JSON and other request errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      error: {
        code: "INVALID_JSON",
        message: "The request body contains invalid JSON."
      }
    });
  }

  console.error(err);

  return res.status(500).json({
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected server error occurred."
    }
  });
});

export default app;
