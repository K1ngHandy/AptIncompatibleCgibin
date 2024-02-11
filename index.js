const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Frames Node App</title>
        <meta property="og:image" content="https://fc-dev-call.replit.app/image" />
        <!-- Custom Meta Tags -->
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://fc-dev-call.replit.app/image">
        
        <meta name="fc:frame:button:1" content="Spec" />
        <meta name="fc:frame:button:1:action" content="link" />
        <meta name="fc:frame:button:1:target" content="https://docs.farcaster.xyz/reference/frames/spec#constructing-a-frame" />
        
        <meta name="fc:frame:button:2" content="Image" />
        <meta name="fc:frame:button:2:action" content="link" />
        <meta name="fc:frame:button:2:target" content="https://fc-dev-call.replit.app/image" />
        
        <meta name="fc:frame:button:3" content="Frame Validator" />
        <meta name="fc:frame:button:3:action" content="link" />
        <meta name="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames" />
        
        <meta name="fc:frame:button:4" content="Replit" />
        <meta name="fc:frame:button:4:action" content="link" />
        <meta name="fc:frame:button:4:target" content="https://replit.com/@kinghandy/AptIncompatibleCgibin#index.js" />
    </head>
    <body>
        <h1>Frames Node App</h1>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
