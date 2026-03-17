import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", (req, res) => {
    const { name, phone, email, message } = req.body;
    
    // In a real production app, you would use nodemailer or a service like Resend here.
    // For this environment, we log the request and return success.
    console.log("Nueva solicitud de contacto:");
    console.log("Nombre:", name);
    console.log("Teléfono:", phone);
    console.log("Email:", email);
    console.log("Mensaje:", message);
    console.log("Enviando a: Magdalena@suhogarsevilla.com");

    // Simulate successful email sending
    res.json({ success: true, message: "Solicitud enviada correctamente" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
