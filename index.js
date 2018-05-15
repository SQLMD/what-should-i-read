const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/public`));
app.set("view engine", "ejs");

const request = require("request");
const API_KEY = process.env.API_KEY;
let fictionList = true;

app.get("/", (req, res) => {
  let list = "fiction";
  if (fictionList) {
    list = "nonfiction";
  }
  request.get(
    {
      url: "https://api.nytimes.com/svc/books/v3/lists.json",
      qs: {
        "api-key": API_KEY,
        list: "combined-print-and-e-book-" + list
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
      const url = body.results[randomBook].amazon_product_url;
      console.log(url);
      fictionList = !fictionList;
      res.render("main", { author, title, url });
    }
  );
});

app.listen(3000, () => console.log("Server is running"));
