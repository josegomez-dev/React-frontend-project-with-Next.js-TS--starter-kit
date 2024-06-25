import { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { useGlobalContext } from '../context/GlobalContext'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { authenticated, role } = useGlobalContext()

  return (
      <>
        <Nav />
        <main className="p-4">
            {authenticated && <div className='custom-nav-spacer' />}
            {children}
            {!authenticated && <Footer />}
        </main>
      </>  
  )
}

export default Layout