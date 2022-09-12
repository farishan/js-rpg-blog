import Container from '../../components/container'
import Layout from '../../components/layout'
import Header from '../../components/header'
import { CMS_NAME } from '../../lib/constants'

export default function JavaScriptVariable() {
    return (
        <>
            <Layout title={`Variable - JavaScript - Next.js Blog with ${CMS_NAME} about JavaScript RPG`}>
                <Container>
                    <Header />

                    <main className="prose">
                        <p>JavaScript Variable</p>

                        
                    </main>
                </Container>
            </Layout>
        </>
    )
}
