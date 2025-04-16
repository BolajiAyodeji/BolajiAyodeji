export interface FeedItem {
  title: string;
  pubDate: string;
  link: string;
}

export interface Feed {
  items: FeedItem[];
}
