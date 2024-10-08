import Logo from '../assets/icon/Logo.png';
import { navLinks } from '../constants';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
  </svg>
);


const Header = () => {
  return (
    <header className='padding-x py-[3px] px-[70px] absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href = "/">
          <img 
            src={Logo}
            alt='Logo'
            width={53}
            height={62}
          />
          <p className='inline'>ScratchBook</p>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => 
            (
              <li key={item.label}>
              <a href={item.href}>
                {item.label}
              </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header;  