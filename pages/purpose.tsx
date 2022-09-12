import Container from '../components/container'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import { useRouter } from 'next/router'
import LocaleSwitcher from '../components/locale-switcher'

const content = {
    en: "Role-playing Game (RPG) is always be a part of my life and my dream. JavaScript is the first understandable programming language for me. Making a RPG with JavaScript is one of my dream and this blog is where I want to share how it started, and hopefully how it finished.",
    id: "Role-playing Game (RPG) adalah bagian dari hidup dan mimpi saya. JavaScript is the first understandable programming language for me. Making a RPG with JavaScript is one of my dream and this blog is where I want to share how it started, and hopefully how it finished."
}

export default function Purpose() {
    const { locale } = useRouter()

    return (
        <>
            <Layout title={`Purpose - Next.js Blog with ${CMS_NAME} about JavaScript RPG`}>
                <Container>
                    <Header />

                    <div className="text-right">
                        <LocaleSwitcher />
                    </div>

                    <hr className="my-4" />

                    <main>
                        <p>{content[locale]}</p>
                    </main>
                </Container>
            </Layout>
        </>
    )
}
