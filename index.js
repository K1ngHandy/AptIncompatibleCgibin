const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Node App</title>
        <meta property="og:title" content="My Node App" />
        <meta property="og:description" content="A simple Node.js app with OG tags" />
        <meta property="og:image" content="https://fc-dev-call.replit.app/image" />
        <meta property="og:url" content="https://example.com" />
        <!-- Custom Meta Tags -->
        <meta name="fc:frame" content="exampleFrame">
        <meta name="fc:frame:image" content="https://fc-dev-call.replit.app/imagejpg">
        <meta name="fc:frame:button:1" content="Button 1 Text">
        <meta name="fc:frame:button:1:action" content="Action1">
        <meta name="fc:frame:button:1:target" content="Target1">
        <meta name="fc:frame:button:2" content="Button 2 Text">
        <meta name="fc:frame:button:2:action" content="Action2">
        <meta name="fc:frame:button:2:target" content="Target2">
        <meta name="fc:frame:button:3" content="Button 3 Text">
        <meta name="fc:frame:button:3:action" content="Action3">
        <meta name="fc:frame:button:3:target" content="Target3">
        <meta name="fc:frame:button:4" content="Button 4 Text">
        <meta name="fc:frame:button:4:action" content="Action4">
        <meta name="fc:frame:button:4:target" content="Target4">
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
