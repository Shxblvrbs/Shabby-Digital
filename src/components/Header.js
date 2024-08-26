import React from 'react';
// images
import Logo from '../assets/Shabby Digital Logo Symbol Transparent bg - Copy.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' className="size-1/4 lg:size-1/12"/>
          </a>
          {/* button */}
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center pr-10'
          >
          <button className='btn btn-sm'>Contact</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
