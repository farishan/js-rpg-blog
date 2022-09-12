import Container from '../../components/container'
import Layout from '../../components/layout'
import Header from '../../components/header'
import { CMS_NAME } from '../../lib/constants'
import PostTitle from '../../components/post-title'

const code = `<script>
    console.log('Hello, World!')
</script>`

export default function JavaScriptHelloWorld() {
    return (
        <>
            <Layout title={`Hello World - JavaScript - Next.js Blog with ${CMS_NAME} about JavaScript RPG`}>
                <Container>
                    <Header />

                    <PostTitle>Hello, World!</PostTitle>

                    <main className="prose">
                        <h2>Tasks</h2>
                        <ol>
                            <li>Create a directory, name it <code>hello-world</code>.</li>
                            <li>Open your text editor.</li>
                            <li>
                                Write a few lines of code below:
                                <pre>
                                    <code>
                                        {code}
                                    </code>
                                </pre>
                            </li>
                            <li>Save as <code>index.html</code> inside the <code>hello-world</code> directory.</li>
                            <li>Open <code>index.html</code> with your browser.</li>
                            <li>Inspect page and check the console.</li>
                        </ol>
                    </main>
                </Container>
            </Layout>
        </>
    )
}
