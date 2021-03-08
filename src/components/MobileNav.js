import { useRef } from 'react';
import cart from '../images/shopping-cart-icon.svg';
import { useSpring, useTrail, useChain, animated, config } from 'react-spring';

function MobileNav({ isMobileNavOpen, setIsMobileNavOpen }) {
  const springRef = useRef()
  const mobileNavAnimation = useSpring({
    ref: springRef,
    from: { opacity: 0, transform: 'scale(0.8)' }, 
    to: { opacity: isMobileNavOpen ? 1 : 0, transform: isMobileNavOpen ? 'scale(1)' : 'scale(0.8)' },
    config: config.stiff,
  })

  const menuItems = [
    'Home', 
    'About Us', 
    'Our Lands', 
    'Our Suppliers', 
    'Products', 
    'Contact Us'
  ]
  const trailRef = useRef()
  const menuItemsAnimation = useTrail(menuItems.length, {
    ref: trailRef,
    from: { opacity: 0, transform: 'translateX(-10%)' }, 
    to: { opacity: 1, transform: 'translateX(0)' }, 
    config: config.stiff, 
  })

  useChain([springRef, trailRef])

  return (
    <animated.nav className='mobile-nav' style={mobileNavAnimation}>
      <div className='mobile-avatar-and-close-btn-container'>
        <div className='mobile-cart-and-avatar'>
          <div className='profile-picture'></div>
          <img src={cart} alt='shopping cart icon' />
        </div>
        <div className='close-mobile-menu-btn'>
          <button onClick={() => setIsMobileNavOpen(false)}>Close</button>
        </div>
      </div>
      <div className='mobile-nav-links'>
        {menuItemsAnimation.map((props, index) => (
          <animated.div 
            className='mobile-menu-item' 
            key={index} 
            style={props}>
              {menuItems[index]}
          </animated.div>
        ))}
      </div>
    </animated.nav>
  )

}

export default MobileNav;