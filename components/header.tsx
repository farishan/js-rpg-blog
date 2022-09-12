import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-20 mt-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">JS-RPG</a>
        </Link>
      </h2>
      <div>
        <nav className="flex flex-wrap items-center">
          <Link href="/purpose">
            <a className="hover:underline">Purpose</a>
          </Link>
          <Link href="/javascript">
            <a className="hover:underline ml-4">JavaScript</a>
          </Link>
          <Link href="/rpg">
            <a className="hover:underline ml-4">RPG</a>
          </Link>
          <Link href="/roadmap">
            <a className="hover:underline ml-4">Roadmap</a>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
