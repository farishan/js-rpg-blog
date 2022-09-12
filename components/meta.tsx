import { NextSeo } from 'next-seo'
import { CMS_NAME, HOME_OG_IMAGE_URL, SITE_NAME } from '../lib/constants'

interface IMetaProps {
  title?: string
  additionalOgImages?: any[]
}

const Meta = ({ title, additionalOgImages = [] }: IMetaProps) => {
  const url = 'https://js-rpg.com'
  const description = `A statically generated blog using Next.js and ${CMS_NAME} about JavaScript RPG.`

  return (
    <NextSeo
      title={title || SITE_NAME}
      description={description}
      additionalMetaTags={[
        {
          name: "msapplication-TileColor",
          content: "#000000"
        },
        {
          name: "msapplication-config",
          content: "/favicon/browserconfig.xml"
        },
        {
          name: "theme-color",
          content: "#000"
        },
      ]}
      additionalLinkTags={[
        {
          rel: "apple-touch-icon",
          href: "/favicon/apple-touch-icon.png",
          sizes: "180x180"
        },
        {
          rel: "icon",
          href: "/favicon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          rel: "icon",
          href: "/favicon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest"
        },
        {
          rel: "mask-icon",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#000000"
        },
        {
          rel: "shortcut icon",
          href: "/favicon/favicon.ico"
        },
        {
          rel: "alternate",
          type: "application/rss+xml",
          href: "/feed.xml"
        }
      ]}
      openGraph={{
        url: url,
        title: title || SITE_NAME,
        description: description,
        images: [
          {
            url: HOME_OG_IMAGE_URL
          },
          ...additionalOgImages
        ],
        site_name: SITE_NAME,
      }}
    />
  )
}

export default Meta
