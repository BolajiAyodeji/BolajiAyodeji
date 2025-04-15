import Parser from "rss-parser";
const parser = new Parser({
  headers: {
     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36"
  }
});

export async function fetchRssData(url: string): Promise<string> {
  const feed = await parser.parseURL(url);

  const list = feed.items.slice(0, 5).map((item) => {
    const date = new Date(item.pubDate as string);
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
      : `Read more newsletter issues: ${url.replace(/\/feed$/, "")}`
  }.
  `;
}
