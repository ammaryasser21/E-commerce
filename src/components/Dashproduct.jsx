import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Table from "./Table";
import Mobilenavbar from "./Mobilenavbar";
import { useProducts } from "../ProductContext.js";
import "../components/DashboardCSS/Product_Category.css";
const tableType = "Dashproduct";
const T_head = ["id#", "name", "category", "photo", "isNew", "isFeatured", "isTrending", "isOneSale", "price", "discount", "capacity"];

const Dashproduct = () => {
  const { products: initialProducts } = useProducts();
  const [products, setProducts] = useState(initialProducts);
  const [editedProduct, setEditedProduct] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    isNew: false,
    isFeatured: false,
    isTrending: false,
    isOneSale: false,
    price: '',
    discount: '',
    number: '',
    capacity: '',
    photo: '',
    category: ''
  });
  const [newProduct, setNewProduct] = useState({});

  const editProduct = (editedProductData) => {
    setEditedProduct(editedProductData);
    setFormData(editedProductData);
  };

  const updateProduct = (e) => {
    e.preventDefault();
    const updatedProducts = products.map(product =>
      product.id === editedProduct.id ? formData : product
    );
    setProducts([...updatedProducts]);
    setEditedProduct(null);
    setFormData({
      id: '',
      name: '',
      description: '',
      isNew: false,
      isFeatured: false,
      isTrending: false,
      isOneSale: false,
      price: '',
      discount: '',
      number: '',
      capacity: '',
      photo: '',
      category: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue
    });
  };

  const cancelEdit = () => {
    setEditedProduct(null);
    setFormData({
      id: '',
      name: '',
      description: '',
      isNew: false,
      isFeatured: false,
      isTrending: false,
      isOneSale: false,
      price: '',
      discount: '',
      number: '',
      capacity: '',
      photo: '',
      category: ''
    });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    if (editedProduct && editedProduct.id === id) {
      setEditedProduct(null);
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    setNewProduct({ ...newProduct, id: products.length + 1 });
    setProducts([...products, newProduct]);
    setFormData({
      id: '',
      name: '',
      description: '',
      isNew: false,
      isFeatured: false,
      isTrending: false,
      isOneSale: false,
      price: '',
      discount: '',
      number: '',
      capacity: '',
      photo: '',
      category: ''
    });
  };
  
  return (
    <div className="page">
      <Sidebar />
      <Mobilenavbar />
      <section className="content">
        <header className="dash-header">
          <h3>Products</h3>
        </header>
        <div className="box" style={{ height: "100px", backgroundColor: "white" }}>
          <h5>Add / Update Product</h5>
          <p>Add your product and necessary information from here</p>
        </div>
        {editedProduct ? (
          <form className="box" onSubmit={updateProduct}>
            <div className="input-div box">
              <label htmlFor="id" className="form-label">
                Product ID
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Product ID"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="input-div box">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Product Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-div box">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Price"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-div box">
              <label htmlFor="discount" className="form-label">
                Discount
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Discount"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-div-check">
              <label className="form-label">Is New</label>
              <input
                
                type="checkbox"
                name="isNew"
                checked={formData.isNew}
                onChange={handleInputChange}
              /><label className="form-label">Is Featured</label>
              <input
                className=""
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
              /><label className="form-label">Is Trending</label>
              <input
                className=""
                type="checkbox"
                name="isTrending"
                checked={formData.isTrending}
                onChange={handleInputChange}
              /> <label className="form-label">Is One Sale</label>
              <input
                className=""
                type="checkbox"
                name="isOneSale"
                checked={formData.isOneSale}
                onChange={handleInputChange}
              />
            </div>


            <div className="input-div box">
              <label htmlFor="capacity" className="form-label">
                Capacity
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Capacity"
                id="capacity"
                name="capacity"
                value={formData.capacity}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-div box">
              <label htmlFor="photo" className="form-label">
                Photo
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Photo"
                id="photo"
                name="photo"
                value={formData.photo}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-div box">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Category"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </div>

            <div className="buttons">
              <button type="reset" className="cancel-btn btn PC-btn">
                Cancel
              </button>
              <button type="submit" className="sign-in-btn btn PC-btn">
                Update Product
              </button>
            </div>
          </form>
        ) : (
          <form className="box">
             <div className="input-div box">
              <label htmlFor="id" className="form-label">
                Product ID
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Product ID"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="input-div box">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Product Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-div box">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Price"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-div box">
              <label htmlFor="discount" className="form-label">
                Discount
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Discount"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-div-check">
              <label className="form-label">Is New</label>
              <input
                
                type="checkbox"
                name="isNew"
                checked={formData.isNew}
                onChange={handleInputChange}
              /><label className="form-label">Is Featured</label>
              <input
                className=""
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
              /><label className="form-label">Is Trending</label>
              <input
                className=""
                type="checkbox"
                name="isTrending"
                checked={formData.isTrending}
                onChange={handleInputChange}
              /> <label className="form-label">Is One Sale</label>
              <input
                className=""
                type="checkbox"
                name="isOneSale"
                checked={formData.isOneSale}
                onChange={handleInputChange}
              />
            </div>

            

            <div className="input-div box">
              <label htmlFor="capacity" className="form-label">
                Capacity
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Capacity"
                id="capacity"
                name="capacity"
                value={formData.capacity}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-div box">
              <label htmlFor="photo" className="form-label">
                Photo
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Photo"
                id="photo"
                name="photo"
                value={formData.photo}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-div box">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Category"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </div>
            <div className="buttons">
              <button onClick={cancelEdit} className="cancel-btn btn PC-btn">
                Cancel
              </button>
              <button onClick={addProduct} type="update" className="sign-in-btn btn PC-btn">
                Add Product
              </button>
            </div>
          </form>
        )}
        <div className="box" style={{ overflowX: "auto" }}>
        <Table
            tableType={tableType}
            T_head={T_head}
            T_row={products}
            onEdit={editProduct}
            onDelete={deleteProduct}
          />
        </div>
      </section>
    </div>
  );
};

export default Dashproduct;
