import React,{useState} from 'react'
import './css/ProductList.css';
import ProductCard from './ProductCard';
import Empty from './Empty';
const ProductList = ({ products, addToCart, addToWishlist, removeFromCart, removeFromWishlist }) => {
  const [alerts, setAlerts] = useState([]);
  const [alertIndex, setAlertIndex] = useState(0);


  return (
    <>
      {products.length > 0 ? (
        <div className='product-list'>
          {products.map(product => (
            <ProductCard key={product.id}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            removeFromCart={removeFromCart}
            removeFromWishlist={removeFromWishlist} alerts={alerts} setAlerts={setAlerts} alertIndex={alertIndex}
            setAlertIndex={setAlertIndex}
            product={product}/>
          ))}
        </div>
      ) : (
        <Empty name="There are no products!"/>
      )}
    </>
    
  )
}

export default ProductList