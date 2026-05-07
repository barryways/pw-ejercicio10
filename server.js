const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Express + Elastic Beanstalk</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .card {
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.12);
            text-align: center;
          }
          h1 {
            color: #232f3e;
          }
          p {
            color: #555;
            font-size: 18px;
          }
          .badge {
            display: inline-block;
            background: #ff9900;
            color: #232f3e;
            padding: 8px 14px;
            border-radius: 20px;
            font-weight: bold;
            margin-top: 12px;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Servidor Express desplegado en AWS</h1>
          <p>Despliegue continuo con AWS CodePipeline y Elastic Beanstalk.</p>
          <div class="badge">Versión 1.0</div>
        </div>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "express-elastic-beanstalk",
    version: "1.0"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});