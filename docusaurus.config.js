// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CS 220",
  tagline: "Programming Methodology",

  // Set the production url of your site here
  url: "https://umass-compsci-220.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "umass-compsci-220", // Usually your GitHub org/user name.
  projectName: "umass-compsci-220.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "./materials",
          routeBasePath: "materials",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: "COMPSCI 220",
        items: [
          {
            to: "materials/category/homework",
            label: "Homework",
            position: "left",
          },
          {
            to: "materials/category/discussion",
            label: "Discussion",
            position: "left",
          },
          {
            to: "materials/resources/office-hours",
            label: "Office Hours",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
            {
            title: "Material",
            items: [
              {
                label: "Homework",
                to: "materials/category/homework"
              },
              {
                label: "Discussion",
                to: "materials/category/discussion"
              },
              {
                label: "Extra Credit",
                to: "materials/category/practice-and-extra-credit"
              },
              {
                label: "Exams",
                to: "materials/category/exams"
              }
            ]
          },
          {
            title: "Guidelines",
            items: [
              {
                label: "Bad Practices",
                to: "materials/guidelines/bad-practices"
              },
              {
                label: "Syntax and Code",
                to: "materials/guidelines/syntax-and-code"
              },
              {
                label: "Testing",
                to: "materials/guidelines/testing"
              },
              {
                label: "Regrade Requests",
                to: "materials/guidelines/regrade-requests"
              }            
            ]
          },
          {
            title: "Resources",
            items: [
              {
                label: "Office Hours",
                to: "materials/resources/office-hours"
              },
              {
                label: "In-Person",
                to: "materials/resources/other-in-person-resources"
              },
              {
                label: "External Content",
                to: "materials/resources/external-content"
              }
            ]
          },
          {
            title: "Tutorials",
            items: [
              {
                label: "Videos",
                to: "materials/tutorials/tutorial-videos"
              },
              {
                label: "Assignments",
                to: "materials/category/assignments"
              },
              {
                label: "Workflow One-pager",
                to: "materials/tutorials/workflow-one-pager"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UMass CompSci 220`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
