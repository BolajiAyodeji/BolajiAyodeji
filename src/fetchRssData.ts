// import Parser from "rss-parser";
// const parser = new Parser();

import { Feed, FeedItem } from "./types/feed";

export async function fetchRssData(url: string): Promise<string> {
  // const feed = await parser.parseURL(url);

  let feed: any = {};
  console.log(encodeURIComponent(url));

  try {
    const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;
    const response = await fetch(feedUrl);
    if (!response.ok) {
      throw new Error(`Something went wrong: ${response.status}`);
    }
    feed = await response.json();
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return "Error fetching RSS feed.";
  }

  const list = (feed as Feed).items.slice(0, 5).map((item: FeedItem) => {
    const date = new Date(item.pubDate);
    const publishedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    return `<li><a href=${item.link}?utm_source=github-profile target="_blank" rel="noopener noreferrer">${item.title}</a> (${publishedDate}).</li>`;
  });

  return `
  <ul>
    ${list.join("")}
  </ul>\n
  ${
    url.endsWith("rss.xml")
      ? `Read more blog posts: ${url.replace(/\/rss.xml$/, "")}`
      : `Read more news letters: ${url.replace(/\/feed$/, "")}`
  }.
  `;
}
