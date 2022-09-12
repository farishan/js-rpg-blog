import Container from '../../components/container'
import Layout from '../../components/layout'
import Header from '../../components/header'
import { CMS_NAME } from '../../lib/constants'
import Link from 'next/link'

export default function JavaScript() {
    return (
        <>
            <Layout title={`JavaScript - Next.js Blog with ${CMS_NAME} about JavaScript RPG`}>
                <Container>
                    <Header />

                    <main className="prose">
                        <p>JavaScript</p>

                        <ol>
                            <li>
                                <Link href="/javascript/hello-world">
                                    <a className="underline">
                                        Hello, World!
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/javascript/variable">
                                    <a className="underline">
                                        Variable
                                    </a>
                                </Link>
                            </li>
                            <li>End</li>
                        </ol>
                    </main>
                </Container>
            </Layout>
        </>
    )
}
