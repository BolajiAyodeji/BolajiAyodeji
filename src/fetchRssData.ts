import Parser from "rss-parser";
const parser = new Parser();

export async function fetchRssData(url: string, isUrlXml?: boolean | undefined): Promise<string> {
  const feed = await parser.parseURL(url);

  const list = feed.items
    .slice(0, 5)
    .map((item) => {
      const date = new Date(item.pubDate as string);
      const publishedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

      return `<li><a href=${item.link} target="_blank" rel="noopener noreferrer">${item.title}</a> (${publishedDate}).</li>`;
    })
    .join("");

  return `
  <ul>
    ${list}
  </ul>\n
  ${
    isUrlXml
      ? `Read more blog posts: ${url.replace(/\/rss.xml$/, "")}`
      : `Read more newsletter issues: ${url.replace(/\/feed$/, "")}/archive`
  }.
  `;
}
