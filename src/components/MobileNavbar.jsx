// import React from 'react'
// import logo from '../assets/react.svg'
// import { FaBars } from 'react-icons/fa'
// import NavLinks from '../constants'


// const MobileNavbar = ({ setIsMenuOpen }) => {
//     return (
//         <div className='w-screen fixed top-0 z-20'>
//             <nav className='w-[280px] h-screen flex flex-col p-8 bg-background'>
//                 <a href="/"><img src={logo} alt="logo" className='h-10 mb-8 object-contain' /></a>

//                 <ul className=''>
//                     {NavLinks.map((link) =>
//                         <li className=' mb-5'><a href={link.url} className='nav-link'>{link.lable}</a></li>
//                     )}
//                 </ul>

//                 <button className='h-10 px-6 rounded-lg text-sm font-medium btn-hover'>Contact</button>
//             </nav>
//             <div onClick={() => {
//                 setIsMenuOpen(false)
//             }} className='h-screen w-screen bg-slate-400/60 backdrop-blur-md fixed top-0 -z-10' />
//         </div>
//     )
// }

// export default MobileNavbar