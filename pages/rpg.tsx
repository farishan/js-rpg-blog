import Container from '../components/container'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'

export default function RPG() {
    return (
        <>
            <Layout title={`RPG - Next.js Blog with ${CMS_NAME} about JavaScript RPG`}>
                <Container>
                    <Header />

                    <main>
                        <iframe
                            src="https://en.wikipedia.org/w/index.php?title=Role-playing_game&oldid=1105803899"
                            frameBorder="0"
                            className="w-full h-[50vh] border border-4 mb-8"
                        />
                    </main>
                </Container>
            </Layout>
        </>
    )
}
