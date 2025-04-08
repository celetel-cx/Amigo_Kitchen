import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import * as net from 'net';
import { exec } from 'child_process';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  
  // Attempt to close any existing connection on port 5000
  const testServer = net.createServer();
  
  testServer.once('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      log('Port 5000 is busy, attempting to close existing connection...');
      // Try to kill any process using the port
      exec('lsof -i :5000 -t | xargs kill -9', (error: any, stdout: any, stderr: any) => {
        if (error) {
          log(`Error attempting to free port: ${error}`);
        }
        // Try again after a brief delay
        setTimeout(() => {
          startServer();
        }, 1000);
      });
    } else {
      log(`Unexpected error: ${err}`);
    }
  });
  
  testServer.once('listening', () => {
    testServer.close();
    startServer();
  });
  
  testServer.listen(port, '0.0.0.0');
  
  function startServer() {
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`serving on port ${port}`);
    }).on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        log(`Port ${port} is still in use, trying an alternative port...`);
        // As a last resort, try a different port
        const alternativePort = 3000;
        server.listen({
          port: alternativePort,
          host: "0.0.0.0",
          reusePort: true,
        }, () => {
          log(`serving on alternate port ${alternativePort}`);
        });
      } else {
        log(`Server error: ${err}`);
      }
    });
  }
})();
