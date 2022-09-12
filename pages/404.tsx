import Link from 'next/link'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'

export default function FourOhFour() {
    return <>
        <Layout title="404 - Page Not Found">
            <Container>
                <Header />

                <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                        404 - Page Not Found
                    </h1>
                    <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                        <Link href="/">
                            <a className="hover:underline">
                                Go back home
                            </a>
                        </Link>
                    </h4>
                </section>
            </Container>
        </Layout>
    </>
}