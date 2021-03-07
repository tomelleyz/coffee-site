import icedCoffeeBagImage from '../images/iced-coffee-bag.png';
import caramelFrappeBagImage from '../images/caramel-frappe-bag.png';
import mochaLateBagImage from '../images/mocha-late-bag.png';
import doubleEspressoBagImage from '../images/double-espresso-bag.png';


function SmallCoffeeCard(props) {
  const availableCoffeePacks = [
    {
      coffeeName: 'Iced Coffee', 
      description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species', 
      imagePath: icedCoffeeBagImage,
      quantity: 1, 
      price: 69.99, 
      id: 1, 
    }, 
    {
      coffeeName: 'Caramel Frappe', 
      description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species', 
      imagePath: caramelFrappeBagImage,
      quantity: 1, 
      price: 70.00,
      id: 2,  
    }, 
    {
      coffeeName: 'Mocha Late', 
      description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species', 
      imagePath: mochaLateBagImage,
      quantity: 1, 
      price: 67.99, 
      id: 3, 
    }, 
    {
      coffeeName: 'Double Espresso', 
      description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species', 
      imagePath: doubleEspressoBagImage,
      quantity: 1, 
      price: 71.50, 
      id: 4, 
    }
  ]

  return (
    availableCoffeePacks.map(coffeePack => (
      <div 
        key={coffeePack.id} 
        tabIndex='0'
        role='button'
        className='small-coffee-card-container'
        onClick={() => props.handleCoffeeCardClick(coffeePack)}
        onKeyDown={() => props.handleCoffeeCardClick(coffeePack)}
      >
        <div style={{textAlign: 'right'}}>
          <img 
            src={coffeePack.imagePath} 
            alt='coffee bag'
            className='small-coffee-card-img'  
          /> {/* TODO: Fix Double Espresso image size issue */}
        </div>
        <div className='small-coffee-card'>
          <h5 className='small-coffee-name title-text-color'>
            {coffeePack.coffeeName}
          </h5>
          <p className='small-coffee-description'>
            {coffeePack.description}
          </p>
        </div>
      </div>
    ))
  )
}

export default SmallCoffeeCard;