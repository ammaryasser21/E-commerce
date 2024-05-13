import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Title from './Title'
import FilterBar from './FilterBar';
import ProductList from './ProductList'
import { useProducts } from "../ProductContext.js";
import { useWishlistCart } from "../WishlistCartContext.js";

const ProductSearch = () => {  
  const {products} = useProducts();
  const { addToCart, addToWishlist, removeFromCart, removeFromWishlist } = useWishlistCart();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchParam = queryParams.get('search');
    
    if (searchParam) {
      const filtered = products.filter(product => product.name.toLowerCase().includes(searchParam));
      setFilteredProducts(filtered);
      setSearch(searchParam);
    } else {
      setFilteredProducts(products);
      setSearch('');
    }
  }, [location, products]);

  const handleSort = (option) => {
    setSelectedOption(option);
    let sortedProducts = [...filteredProducts];
    switch (option) {
      case 'Name(a - z)':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Name(z - a)':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Price(Low - High)':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Price(High - Low)':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <>
    <Title title="SEARCH" type={search}/>
    <FilterBar products={filteredProducts} handleSort={handleSort} />
    <ProductList products={filteredProducts} 
    addToCart={addToCart}
            addToWishlist={addToWishlist}
            removeFromCart={removeFromCart}
            removeFromWishlist={removeFromWishlist} />
  </>
    
  )
}

export default ProductSearch