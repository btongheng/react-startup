import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import NavLinks from '../constants'

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
      <header className='bg-background sticky top-0 z-30 border-b border-primary/10 '>
        <nav className='max-w-screen-xl mx-auto py-4 px-6'>
          <div className='flex items-center justify-between'>
            <a href="/" className='flex items-center justify-center text-primary gap-1 font-semibold text-2xl uppercase'><img src={logo} alt="logo" className='h-10 w-auto object-contain' />FreeCinema</a>

            <ul className='hidden md:flex md:gap-14'>
              {NavLinks.map((link) =>
                <li><a href={link.url} className='nav-link'>{link.lable}</a></li>
              )}
            </ul>

            <button className='hidden md:block h-10 px-6 rounded-lg text-sm font-medium btn-hover'>Contact</button>
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
              }}
              className='md:hidden flex w-10 h-10 text-lg rounded-lg btn-hover'>
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      <nav className={`${!isMenuOpen ? 'left-[-100%]' : 'left-0'}  mx-auto w-[70%] fixed border-r border-primary/10 h-screen flex flex-col items-start py-4 px-6 bg-background transition-all`}>
        <ul className=''>
          {NavLinks.map((link) =>
            <li className='mb-8'><a href={link.url} className='nav-link' onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}>{link.lable}</a></li>
          )}
        </ul>

        <button className='h-10 px-6 rounded-lg text-sm font-medium btn-hover'>Contact</button>
      </nav>
    </>
  )
}

export default NavBar