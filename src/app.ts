import * as fs from "fs";
const md = require("markdown-it")({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true // Autoconvert URL-like text to links
});
import { fetchRssData } from "./fetchRssData";
import { fetchGitHubData } from "./fetchGitHubData";

const blogFeedUrl = "https://blog.bolajiayodeji.com/rss.xml";
const newsletterFeedUrl = "https://bawd.bolajiayodeji.com/feed";

const ossProjectRepos = [
  "inspireNuggets",
  "BolajiAyodeji",
  "attraktives-headshot",
  "fed-unis-perf-eval",
  "movie_reviews_sentiment_analysis",
  "dotfiles",
  "hh-store"
];
const ossLearningMaterialRepos = ["deploy-ml-web-workshop", "cl-composable-commerce-workshop"];

const githubUsername = "BolajiAyodeji";
const websiteUrl = "https://bolajiayodeji.com";
const blogUrl = "https://blog.bolajiayodeji.com";
const newsletterUrl = "https://bawd.bolajiayodeji.com";
const youtubeUrl = "https://youtube.com/c/bolajiayodeji";
const slidesUrl = "https://slides.com/bolajiayodeji";
const twitterUrl = "https://x.com/iambolajiayo";
const linkedinUrl = "https://linkedin.com/in/bolajiayodeji";
const githubSponsorsUrl = "https://github.com/sponsors/BolajiAyodeji";
const patreonUrl = "https://patreon.com/bolajiayodeji";

async function generateMarkdown() {
  const websiteBadge = `[![Website Badge](https://img.shields.io/badge/-Website-3B7EBF?style=for-the-badge&logo=amp&logoColor=white)](${websiteUrl})`;
  const hashnodeBadge = `[![Blog Badge](https://img.shields.io/badge/-Blog-3B7EBF?style=for-the-badge&logo=Hashnode&logoColor=white)](${blogUrl})`;
  const substackBadge = `[![Newsletter Badge](https://img.shields.io/badge/-Newsletter-3B7EBF?style=for-the-badge&logo=Substack&logoColor=white)](${newsletterUrl})`;
  const youtubeBadge = `[![YouTube Badge](https://img.shields.io/badge/-Youtube-3B7EBF?style=for-the-badge&logo=Youtube&logoColor=white)](${youtubeUrl})`;
  const slidesBadge = `[![Slides Badge](https://img.shields.io/badge/-Slides-3B7EBF?style=for-the-badge&logo=slides&logoColor=white)](${slidesUrl})`;
  const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-3B7EBF?style=for-the-badge&logo=Linkedin&logoColor=white)](${linkedinUrl})`;
  const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@iambolajiayo-3B7EBF?style=for-the-badge&logo=x&logoColor=white)](${twitterUrl})`;
  const githubSponsorsBadge = `[![GitHub Sponsors Badge](https://img.shields.io/badge/-sponsors-3B7EBF?style=for-the-badge&logo=github&logoColor=white)](${githubSponsorsUrl})`;
  const patreonBadge = `[![Patreon Badge](https://img.shields.io/badge/-Patreon-3B7EBF?style=for-the-badge&logo=Patreon&logoColor=white)](${patreonUrl})`;
  const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=for-the-badge)`;

  const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
  const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;

  const markdownText = `<div align="center">\n

  ${websiteBadge} ${hashnodeBadge} ${substackBadge} ${youtubeBadge} ${slidesBadge} ${linkedinBadge} ${twitterBadge} ${githubSponsorsBadge} ${patreonBadge} ${profileCountBadge}\n
  
  ---\n
  
  Hi there 👋🏾! I'm a Software Engineer, Teacher, and Developer Advocate working to support the growth of open source technologies and <a href="https://digitalpublicgoods.net/digital-public-goods?ref=bolajiayodeji" target="_blank" rel="noopener noreferrer">digital public goods</a>. I'm an innovative technology professional with progressive IT, web engineering, data, embedded systems, developer relations, technical documentation/writing, open-source, and community/programs management experience in for-profit startups and non-profit technology and education organizations. I have spent the past years writing code for stuff that runs on the web, educating developers, helping different dev-tool startups connect and sustain profitable relationships with their ideal developer and customer profiles, and building open-source/developer communities. Nice to e-meet you :)!\n
  
  ---\n

  ${githubStatsCardDark}\n
  ${githubStatsCardLight}\n

  </div>\n
  
  ---\n
  
  ## Highlights
  
  <details>\n
  <summary>OSS Projects</summary>\n
  <br />
  Here are some of my other projects you might want to check out that are not pinned:\n
  <br />\n<br />
  ${await fetchGitHubData(ossProjectRepos)}\n
  </details>\n
  
  <details>\n
  <summary>OSS Learning Materials</summary>\n
  <br />
  Here are some of my unique-styled workshop materials you can use to learn key concepts at your own pace:\n
  <br />\n<br />
  ${await fetchGitHubData(ossLearningMaterialRepos)}\n
  </details>\n
  
  <details>\n
  <summary>Recent Blogposts</summary>\n
  <br />
  ${await fetchRssData(blogFeedUrl)}\n
  </details>\n
  
  <details>\n
  <summary>Recent Newsletters</summary>\n
  <br />
  ${await fetchRssData(newsletterFeedUrl)}\n
  </details>\n
  
  <details>\n
  <summary>Quick Tips</summary>\n\n
  - 💬 How to reach me: DM [@iambolajiayo](https://x.com/iambolajiayo) on X (Twitter).\n
  - 📬 Where to find me: Subscribe to my [newsletter](https://bawd.bolajiayodeji.com/subscribe) to hear from me bi-weekly or send a game request on [chess.com](https://chess.com/member/bolajiayodeji).\n
  - 📖 Book recommendations: [Knowing God by J. I. Packer](https://bit.ly/3EdCFUW) and [Atomic Habits by James Clear](https://bit.ly/45r1kBH).\n
  - 💙 Fun fact: I'm in a blissful relationship [with Jesus Christ](https://biblegateway.com/passage/?search=1+Timothy+1%3A15-17&version=ESV). Check [this](https://bit.ly/3KYYHij) out :).\n
  </details>\n
  
  ---\n

  <a href="https://blog.bolajiayodeji.com/how-to-create-an-automated-profile-readme-using-nodejs-and-github-actions?utm_source=github-profile">Learn how this works.</a> <a href="https://github.com/BolajiAyodeji/BolajiAyodeji/actions/workflows/build.yml"><img src="https://github.com/BolajiAyodeji/BolajiAyodeji/actions/workflows/build.yml/badge.svg" align="right" alt="Rebuild README.md file"></a>\n
   
  <div align="center">\n
   <a href="https://bolajiayodeji.com" target="_blank" rel="noopener noreferrer"><img src="https://bolajiayodeji.com/favicon.png" width="30" /></a>\n
  </div>`;

  const result = md.render(markdownText);

  fs.writeFile("README.md", result, (error) => {
    if (error) throw new Error(`Something went wrong: ${error}.`);
    console.log(`✅ README.md file was succesfully generated.`);
  });
}

generateMarkdown();
