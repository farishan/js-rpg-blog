import Container from '../components/container'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import PostTitle from '../components/post-title'

export default function Glossary() {
    return (
        <>
            <Layout title={`Glossary - Next.js Blog with ${CMS_NAME} about JavaScript RPG`}>
                <Container>
                    <Header />

                    <PostTitle>Glossary</PostTitle>

                    <main>
                        <div className="prose mb-8">
                            <ul>
                                <li>
                                    <p>Game Mechanic</p>
                                    <p><strong>Mechanics are the player initiated actions from controller inputs as designated by the game designers</strong>. These actions have effects on the gamestate in terms of the variables and dynaimcs of the gameplay system. Some hold that even computer AI can use mechanics. This is a complicated issue. So let's just focus on mechancis as player mechanics. <a href="https://critical-gaming.com/blog/2011/3/29/dialogue-the-mechanics-of-language.html">Source</a></p>
                                </li>
                                <li>...</li>
                            </ul>
                        </div>

                        <p>References: <a href="https://critical-gaming.squarespace.com/critical-glossary/">Critical Glossary</a></p>
                    </main>
                </Container>
            </Layout>
        </>
    )
}
