module.exports = {
  blogPostDir: "", // The name of directory that contains your posts.
  siteTitle: "Brandon Kearns", // Site title.
  siteTitleAlt: "Brandon Kearns - learn, earn, sojourn. repeat.", // Alternative site title for SEO.
  siteLogo: "/logos/frogo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.brandonkearns.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "brandonkearns.com - learn, earn, sojourn. repeat.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "learn", // Default category for posts.
  userName: "Brandon Kearns", // Username to display in the author segment.
  userTwitter: "brandon_kearns", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Atlanta, GA", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/brandonkearns/brandonkearns.github.io",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/brandon_kearns",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Brandon Kearns", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#369369", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
