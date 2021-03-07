import logo from '../images/logo.svg';
import cart from '../images/shopping-cart-icon.svg';

function TopNavbar() {
  return (
    <nav className='top-navbar'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <div className='top-nav-links'>
        <div className='menu-item'>Home</div>
        <div className='menu-item'>About Us</div>
        <div className='menu-item'>Our Lands</div>
        <div className='menu-item'>Our Suppliers</div>
        <div className='menu-item'>Products</div>
        <div className='menu-item'>Contact Us</div>
      </div>

      <div className='cart-and-profile-image-container'>
        <img src={cart} alt='shopping cart icon' />
        <div className='profile-picture'></div>
      </div>
    </nav>
  )
}

export default TopNavbar;