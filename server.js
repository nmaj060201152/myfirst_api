const express = require('express');
const app = express();



// Sample array of objects
const navaid = [
  { id: 1, name: "kaley say dar gai kya",  vdo: "https://www.youtube.com/watch?v=EU76yImoZas&t=26s" },
  { id: 2, name: "Fatima my Doll",  vdo: "https://www.youtube.com/watch?v=fS68Efxml7g" },
  { id: 3, name: "Jumerat",  vdo: "https://www.youtube.com/watch?v=SsegBgYezGE" }
];

export default function handler(req, res) {
    if (req.method === "GET") {
      res.status(200).json(navaid); // JSON response
    } else {
      res.status(405).json({ message: "Method not allowed" }); // Handle other HTTP methods
    }
  }