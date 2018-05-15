const express = require("express");
const app = express();
const request = require("request");

app.get("/", (req, res) => {
  request.get(
    {
      url: "https://api.nytimes.com/svc/books/v3/lists.json",
      qs: {
        "api-key": "b616c56cf63048b49b44bcfa8cd0d7bd",
        list: "hardcover-fiction"
      }
    },
    function(err, response, body) {
      body = JSON.parse(body);
      const randomBook = Math.floor(Math.random() * body.results.length);
      res.send(body.results[randomBook].book_details[0].title);
    }
  );
});

app.listen(3000, () => console.log("Server is running"));
