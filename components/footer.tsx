import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <nav className="py-8">
          <Link href="/glossary">
            <a className="hover:underline">Glossary</a>
          </Link>
        </nav>
        <div className="py-8">
          <p>Copyright &copy; 2022 - Faris Han</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
