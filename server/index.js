const express = require("express");
const app = express();
const request = require("request");
const API_KEY = process.env.API_KEY;

app.get("/", (req, res) => {
  request.get(
    {
      url: "https://api.nytimes.com/svc/books/v3/lists.json",
      qs: {
        "api-key": API_KEY,
        list: "combined-print-and-e-book-fiction"
      }
    },
    function(err, response, body) {
      body = JSON.parse(body);
      const randomBook = Math.floor(Math.random() * body.results.length);
      const title = body.results[
        randomBook
      ].book_details[0].title.toLowerCase();
      const author = body.results[
        randomBook
      ].book_details[0].author.toLowerCase();
      res.send(`${title} by ${author}`);
    }
  );
});

app.listen(3000, () => console.log("Server is running"));
