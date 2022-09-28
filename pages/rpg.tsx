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
                        <div className="prose mb-8">
                            <h2>Rules</h2>
                            <ul>
                                <li>RPG have characters, played by player or non-player (AI)</li>
                            </ul>
                        </div>

                        <hr className="my-8"/>

                        <div className="prose mb-8">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Games" target="_blank" rel="noopener noreferrer">MDN Game Development Center</a></li>
                                <li><a href="https://forums.rpgmakerweb.com/index.php?threads/core-gameplay-loops-in-an-rpg.134427/" target="_blank" rel="noopener noreferrer">Core gameplay loops in an RPG?</a></li>
                                <li>
                                    <a href="http://gamestudies.org/0802/articles/sicart" target="_blank" rel="noopener noreferrer">Defining Game Mechanics by Miguel Sicart (www.miguelsicart.net)</a>
                                </li>
                            </ul>
                        </div>
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
