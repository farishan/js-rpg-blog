import Container from '../../components/container'
import Layout from '../../components/layout'
import Header from '../../components/header'
import { CMS_NAME } from '../../lib/constants'
import Head from 'next/head'

export default function JavaScriptHelloWorld() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlightjs@9.16.2/styles/default.css"/>
                <script src="https://cdn.jsdelivr.net/npm/highlightjs@9.16.2/highlight.pack.min.js"></script>
                <script>hljs.highlightAll();</script>
            </Head>
            <Layout title={`Hello World - JavaScript - Next.js Blog with ${CMS_NAME} about JavaScript RPG`}>
                <Container>
                    <Header />

                    <main className="prose">
                        <p>JavaScript Hello World</p>

                        <p>
                            Steps
                        </p>

                        <ol>
                            <li>Create a directory named <code>hello-world</code></li>
                            <li>Create a JavaScript file named <code>index.js</code> inside <code>hello-world</code> directory mentioned on step 1</li>
                            <li>Write <pre><code className="language-javascript">console.log('hello world')</code></pre> inside <code>index.js</code> mentioned on step 2</li>
                        </ol>
                    </main>
                </Container>
            </Layout>
        </>
    )
}
