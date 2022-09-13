import Container from '../components/container'
import Layout from '../components/layout'
import Header from '../components/header'
import { CMS_NAME } from '../lib/constants'
import PostTitle from '../components/post-title'

export default function Roadmap() {
    return (
        <>
            <Layout title={`Roadmap - Next.js Blog with ${CMS_NAME} about JavaScript RPG`}>
                <Container>
                    <Header />

                    <PostTitle>Roadmap</PostTitle>

                    <main className="prose">
                        <p>To achieve my dream, I need to learn:</p>
                        <ul>
                            <li>
                                Game Design

                                <ul>
                                    <li>Objectives</li>
                                    <li>Game Mechanic</li>
                                </ul>
                            </li>

                            <li>
                                Game Development
                                <ul>
                                    <li>Programming</li>
                                </ul>
                            </li>
                        </ul>

                        <hr />

                        <ol>
                            <li>Simplest JS RPG</li>
                            <li>Normal RPG</li>
                            <li>MMORPG</li>
                            <li>Do anything you want</li>
                        </ol>
                    </main>
                </Container>
            </Layout>
        </>
    )
}
