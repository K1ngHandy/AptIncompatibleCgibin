const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Node App</title>
        <meta property="og:title" content="My Node App" />
        <meta property="og:description" content="A simple Node.js app with OG tags" />
        <meta property="og:image" content="https://example.com/my-image.jpg" />
        <meta property="og:url" content="https://example.com" />
    </head>
    <body>
        <h1>Welcome to My Node App</h1>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
