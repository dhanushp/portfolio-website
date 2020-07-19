const tailwind = require("../tailwind")

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Dhanush Bangera", // Navigation and Site Title
  siteTitleAlt: "Dhanush Bangera", // Alternative Site title for SEO
  siteTitleShort: "Dhanush", // short_name for manifest
  siteHeadline: "Build something new Everyday", // Headline for schema.org JSONLD
  siteUrl: "https://www.dhanushbangera.dev/", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo:
    "https://avatars1.githubusercontent.com/u/43709470?s=400&u=6ea852501f8b67cef1bde4602cc3c13abb6b4cd8&v=4", // Used for SEO and manifest
  siteDescription:
    "A young passionate designer with love for open-source and web development.",
  author: "Dhanush Bangera", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  /*   userTwitter: '@cara', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5', */

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
