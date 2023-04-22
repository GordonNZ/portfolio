import React from 'react';
import './NavBar.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { VscFilePdf } from 'react-icons/vsc';

export default function NavBar() {
  return (
    <nav>
      {/* <img src='' alt='logo'></img> */}
      <h1 className='navLogo'>Gordon Zam</h1>
      <ul className='navList'>
        <a
          href='https://www.linkedin.com/in/gordonzam/'
          target='blank'
          className='flex'
        >
          <FaLinkedin className='icons' />
          <li>Linkedin</li>
        </a>
        <a href='https://github.com/GordonNZ' target='blank' className='flex'>
          <FaGithub className='icons' />
          <li>Github</li>
        </a>
        <div className='flex'>
          <VscFilePdf className='icons' />
          <li>Resume</li>
        </div>
      </ul>
    </nav>
  );
}
