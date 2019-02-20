/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/logo@2x.png',
    infoLink: '/',
    pinned: true,
  },
];

const siteConfig = {
  title: 'SDA-Dev-Document' /* title for your website */,
  tagline: 'Documents for supporting developers of Seoul Digital Archives Systems',
  url: 'https://sda17dev.github.io' /* your website url */,
  baseUrl: '/sda-dev-docs/' /* base url for your project */,

  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'sda-dev-docs',
  organizationName: 'sda17dev',

  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: '개발문서'},
    {doc: 'doc3', label: '엔진'},
    {doc: 'doc5', label: '웹'},
    {href: "https://github.com/sda17dev", label: "GitHub"},
    {blog: true, label: '블로그'},
    {search: true}
    /*{page: 'help', label: 'Help'},*/
    /*{blog: true, label: 'Blog'},*/
  ],

  // If you have users set above, you add it here:
  users,

  /* Enabling the Search Bar-algolia */
  algolia: {
    apiKey: '6adcdc0795e1db08d89313081ffe5d81',
    indexName: 'sda-dev-docs',
    algoliaOptions: {
      facetFilters: [ "language:LANGUAGE", "version:VERSION" ] 
    } // Optional, if provided by Algolia
  },

  /* path to images for header/footer */
  headerIcon: 'img/logo02@2x.png',
  footerIcon: 'img/logo02@2x.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' 서울기록원 Seoul Metropolitan Archives',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],
  //stylesheets: ['css/custom.css'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
