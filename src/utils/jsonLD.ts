import siteData from "./data/siteData.json"
import type { PostDataType } from "./types/MarkDown"
import type { PostData } from "./types/PostData"

export interface JsonLDProps {
  type: "post" | "page"
  post?: PostDataType,
  url: string,
}

export const jsonLDGenerator = ({ type, post, url }: JsonLDProps) => {
  switch(type){
    case "post":
      {
        return `<script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${url}"
          },
          "headline": "${post?.title}",
          "description": "${post?.description}",
          "image": "${post?.image}",
          "author": {
            "@type": "Person",
            "name": "${siteData.author}"
          },
          "datePublished": "${post?.date}",
        }
        </script>`
      }
    case "page":
      {
        return `<script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": "${import.meta.env.SITE}",
            "name": "${siteData.title}",
            "author": {
              "@type": "Person",
              "name": "${siteData.author}"
            }
          }
        </script>`
      }
    default:
      {
        return ""
      }
  }
}