import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import LinkendInLink from './LinkendInLink';
import GitHubLink from './GitHubLink';
import InstagramLink from './InstagramLink';


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          <img className='mx-2 w-10' src={logo} alt='logo'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <LinkendInLink />
            <GitHubLink/>
            <InstagramLink/>
        </div>
    </nav>
  )
}

export default Navbar