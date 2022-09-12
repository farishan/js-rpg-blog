import Container from '../components/container'
import Layout from '../components/layout'
import Header from '../components/header'
import { CMS_NAME } from '../lib/constants'

export default function Roadmap() {
    return (
        <>
            <Layout title={`Roadmap - Next.js Blog with ${CMS_NAME} about JavaScript RPG`}>
                <Container>
                    <Header />

                    <main className="prose">
                        <p>Roadmap</p>

                        <ol>
                            <li>Start</li>
                            <li>End</li>
                        </ol>
                    </main>
                </Container>
            </Layout>
        </>
    )
}
