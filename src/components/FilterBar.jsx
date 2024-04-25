import React  , { useState }from 'react'
import './css/FilterBar.css';
const FilterBar = ({products}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Relevance', 'Name(a-z)', 'Name(z-a)', 'Price(Low-High)','Price(High-Low)'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
    <div className='superdiv'>
      <div className='Showing'>
      <p> <p> Showing {products.length} products</p>
</p>
</div>
<div className='Sort'>
  <p>
      Sort by</p>
</div>

<div className="custom-dropdown">
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'selected-option'}
        
      </div>
     
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    
    </div>
    </div>

    
</>
  )
}

export default FilterBar