const axios = require("axios");
const API_KEY = process.env.API_KEY;

const randomDate = (start, end) => {
  let d = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

let fictionList = true;

module.exports = {
  getRandomBook(req, res) {
    let list = "fiction";
    if (fictionList) {
      list = "nonfiction";
    }
    const rDate = randomDate(new Date(2009, 7, 1), new Date());

    axios
      .get("https://api.nytimes.com/svc/books/v3/lists.json", {
        params: {
          "api-key": API_KEY,
          list: "combined-print-and-e-book-" + list,
          "published-date": rDate
        }
      })
      .then(response => {
        body = response.data;
        const randomBook = Math.floor(Math.random() * body.results.length);
        if (body.results[randomBook] === undefined) {
          res.redirect("/");
        } else {
          const title = body.results[
            randomBook
          ].book_details[0].title.toLowerCase();
          const author = body.results[
            randomBook
          ].book_details[0].author.toLowerCase();
          const url = body.results[randomBook].amazon_product_url;
          fictionList = !fictionList;
          res.render("main", { author, title, url });
        }
      })
      .catch(err => {
        console.log("Error:", err);
        res.status(500).send("Server Error!");
      });
  }
};
