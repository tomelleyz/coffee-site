import { useTransition, animated, config } from 'react-spring';

function HighlightedCoffeeCard(props) {
  const coffeeType = props.highlightedCoffeeType
  const transitions = useTransition(coffeeType, item => item.id, {
    from: { opacity: 0.5, transform: 'translateY(15%)' }, 
    enter: { opacity: 1, transform: 'translateY(0)' }, 
    leave: { opacity: 1, transform: 'translateY(0)' }, 
    config: config.gentle,
  })

  return transitions.map(({ item, key, props }) => 
    <animated.div style={props} key={key} className='highlighted-coffee-container'>
      <div style={{textAlign: 'right'}}>
        <img 
          src={item.imagePath} 
          alt='coffee bag' 
          className='highlighted-coffee-bag-img'
        />
      </div>
      <div className='enlarged-coffee-card'>
        <h4 className='enlarged-coffee-name title-text-color text-center'>
          {item.coffeeName}
        </h4>
        <p className='enlarged-coffee-description text-center'>
          {item.description}
        </p>
        <div className='quantity-and-price-container title-text-color'>
          <p>{item.quantity} Bag</p>
          <p>${item.price.toFixed(2)}</p>
        </div>
      </div>
    </animated.div>
  )
}

export default HighlightedCoffeeCard;