// A quick sandbox to play around with the RSS feeds data.

const fs = require("fs");
const Parser = require("rss-parser");
const parser = new Parser();

const blogFeedUrl = "https://blog.bolajiayodeji.com/rss.xml";
const newsletterFeedUrl = "https://bawd.bolajiayodeji.com/feed";

async function testBlog() {
  const feed = await parser.parseURL(blogFeedUrl);

  fs.writeFile("hashnode.json", JSON.stringify(feed), function (err) {
    if (err) return console.log(err);
    console.log(`Succesfully generated ✅`);
  });

  feed.items.slice(0, 5).map((item) => {
    console.log([item.title, item.link, item.pubDate]);
  });
}

async function testNewsletter() {
  const feed = await parser.parseURL(newsletterFeedUrl);

  fs.writeFile("substack.json", JSON.stringify(feed), function (err) {
    if (err) return console.log(err);
    console.log(`Succesfully generated ✅`);
  });

  feed.items.slice(0, 5).map((item) => {
    console.log([item.title, item.link, item.pubDate]);
  });
}

testBlog();
testNewsletter();
