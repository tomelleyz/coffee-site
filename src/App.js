import { useState } from 'react';
import './App.css';
import TopNavbar from './components/TopNavbar';
import HighlightedCoffeeCard from './components/HighlightedCoffeeCard';
import SmallCoffeeCard from './components/SmallCoffeeCard';
import icedCoffeeBagImage from './images/iced-coffee-bag.png';
import MobileNav from './components/MobileNav';

function App() {
  const [ enlargedCoffeeType, setEnlargedCoffeeType] = useState({
    coffeeName: 'Iced Coffee', 
    description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species', 
    imagePath: icedCoffeeBagImage,
    quantity: 1, 
    price: 69.99, 
    id: 1,
  })
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const handleCoffeeCardClick = (coffeePack) => {
    setEnlargedCoffeeType(coffeePack)
  }

  return (
    <main>
      {isMobileNavOpen && <MobileNav isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />}
      <TopNavbar setIsMobileNavOpen={setIsMobileNavOpen} />
      <div className='main-section'>
        <HighlightedCoffeeCard highlightedCoffeeType={enlargedCoffeeType} />
        <div className='main-text-and-small-coffee-cards-container'>
          <div className='main-heading-text-area'>
            <h4 className='red-text'>Be Active</h4>
            <h1 className='title-text-color'>Barnsley Brew Coffee</h1>
            <p className='heading-paragraph'>
              Coffee is a brewed drink prepared from roasted coffee beans, 
              the seeds of berries from certain Coffea species. When coffee 
              berries turn from.
            </p>
            <h5 className='gray-text-color'>Top Packs</h5>
          </div>
          <div className='small-coffee-cards-group-container'>
            <SmallCoffeeCard handleCoffeeCardClick={handleCoffeeCardClick} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
