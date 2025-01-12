import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "C-Drive",
    pageTitleSuffix: ": Chandni's Digital Garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: { 
      provider: 'google', tagId: 'G-V75BM2EXFJ' },
    locale: "en-US",
    baseUrl: "chandni.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      typography: {
        header: "Libre Baskerville",
        body: "Red Hat Display",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f5eb",
          lightgray: "#e0ddd7",
          gray: "#A09D98",
          darkgray: "#5c534b",
          dark: "#242220",
          secondary: "#13a793",
          tertiary: "#A9CBB7",
          highlight: "rgba(143, 159, 169, 0.05)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#2caaf5",
          tertiary: "#55ad98",
          highlight: "rgba(143, 159, 169, 0.05)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
