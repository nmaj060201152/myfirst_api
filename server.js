const express = require('express');
const app = express();

// Port define karein
const PORT = 5000;

// Sample array of objects
const navaid = [
  { id: 1, name: "kaley say dar gai kya",  vdo: "https://www.youtube.com/watch?v=EU76yImoZas&t=26s" },
  { id: 2, name: "Fatima my Doll",  vdo: "https://www.youtube.com/watch?v=fS68Efxml7g" },
  { id: 3, name: "Jumerat",  vdo: "https://www.youtube.com/watch?v=SsegBgYezGE" }
];

// API route
app.get('/api/navaid', (req, res) => {
  res.json(navaid); // JSON format me response
});

// Server start karein
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
