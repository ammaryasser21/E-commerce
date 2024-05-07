import React, { useState } from 'react';
import './css/FilterBar.css';

const FilterBar = ({ products, handleSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Name(a-z)', 'Name(z-a)', 'Price(Low-High)', 'Price(High-Low)'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleSort(option); // Call the handleSort function passed from ProductCat
  };

  return (
    <div className='superdiv'>
      <div className='Showing'>
        <p> Showing {products.length} products</p>
      </div>
      <div className='Sort'>
        <p>Sort by</p>
      </div>
      <div className="custom-dropdown">
        <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
          {selectedOption || 'Relevance'}
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
  );
}

export default FilterBar;
