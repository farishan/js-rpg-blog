import PreviewAlert from './preview-alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
  noMeta?: boolean
  title?: string
  additionalOgImages?: any[]
}

const Layout = ({ preview, children, noMeta, title, additionalOgImages }: Props) => {
  return (
    <>
      {!noMeta && <Meta title={title} additionalOgImages={additionalOgImages} />}
      <div className="min-h-screen">
        {
          preview &&
          <PreviewAlert />
        }
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
