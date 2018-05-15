const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.static(`${__dirname}/public`));
app.set("view engine", "ejs");

const API_KEY = process.env.API_KEY;
let fictionList = true;

app.get("/", (req, res) => {
  let list = "fiction";
  if (fictionList) {
    list = "nonfiction";
  }
  axios
    .get("https://api.nytimes.com/svc/books/v3/lists.json", {
      params: {
        "api-key": API_KEY,
        list: "combined-print-and-e-book-" + list
      }
    })
    .then(response => {
      body = response.data;
      const randomBook = Math.floor(Math.random() * body.results.length);
      const title = body.results[
        randomBook
      ].book_details[0].title.toLowerCase();
      const author = body.results[
        randomBook
      ].book_details[0].author.toLowerCase();
      const url = body.results[randomBook].amazon_product_url;
      fictionList = !fictionList;
      res.render("main", { author, title, url });
    })
    .catch(err => {
      console.log("Error:", err);
      res.status(500).send("Server Error!");
    });
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running"));
