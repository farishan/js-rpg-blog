import Container from '../../components/container'
import Layout from '../../components/layout'
import Header from '../../components/header'
import { CMS_NAME } from '../../lib/constants'
import Link from 'next/link'
import PostTitle from '../../components/post-title'

const level1Contents = [
    {
        href: "/javascript/hello-world",
        title: "Hello, World!"
    },
    {
        href: "/javascript/variable",
        title: "Variable"
    }
]

export default function JavaScript() {
    return (
        <>
            <Layout title={`JavaScript - Next.js Blog with ${CMS_NAME} about JavaScript RPG`}>
                <Container>
                    <Header />

                    <PostTitle>JavaScript</PostTitle>
                    <main className="prose">

                        <h2>Level 1</h2>

                        <h3>Prerequisite:</h3>
                        <ol>
                            <li>Know how to use a text editor program (Notepad, Text Editor, etc.)</li>
                            <li>Know how to open a HTML file</li>
                        </ol>

                        <hr />

                        <h3>Contents</h3>
                        <ol>
                            {
                                level1Contents.map(content => (
                                    <li key={content.href}>
                                        <Link href={content.href}>
                                            <a>
                                                {content.title}
                                            </a>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ol>
                    </main>
                </Container>
            </Layout>
        </>
    )
}
