import React, { useState, useEffect } from 'react'
import { close, logo, menu } from 'src/assets'
import { navLinks } from 'src/constants'
import { paths } from 'src/routes/paths'
import Button from 'src/components/button'
import styles from 'src/style'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 120);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} ${isScrolled ? 'scrolled nav-box-shadow fixed w-full z-[100] bg-white h-[50px]' : 'bg-white h-[120px]'}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className={`w-full flex justify-between items-center navbar ${isScrolled ? 'h-[50px]' : ''}`}>
          <Link to="/">
            <img src={logo} alt='WoundCare CONNECTS' className={`${isScrolled ? 'w-[129px]' : 'w-[215px]'}`} />
          </Link>
          <ul className={`list-none lg:flex hidden justify-center items-center flex-1`}>
            {navLinks.slice(0, -1).map((nav, i) => (
              <li 
                key={nav.id}
                className={`font-manrope font-normal hover:text-primary cursor-pointer text-[16px] ${isScrolled ? 'text-[14px]' : ''} ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-10`}
              >
                <Link
                  to={nav.id}
                  onClick={() => setActiveMenuItem(nav.id)}
                  className={activeMenuItem === nav.id ? 'active' : ''}
                >{nav.title}</Link>
                {/* <a href={`${nav.id}`}>
                  {nav.title}
                </a> */}
              </li>
            ))}
          </ul>
          <Button title="Sign In" styles={`hidden sm:hidden md:hidden lg:block ${isScrolled ? 'pt-[5px] h-[38px] rounded-[8px]': ''}`} path={paths.auth.login} />
          <div className='lg:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain wc-toggle-menu'
              onClick={() => setToggle((previous) => !previous)}
            />
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[10] nav-box-shadow`}>
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, i) => (
                  <li 
                    key={nav.id}
                    className={`font-manrope font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
                  >
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>        
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
