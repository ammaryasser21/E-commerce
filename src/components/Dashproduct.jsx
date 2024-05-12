import Sidebar from "./Sidebar";
import "../components/DashboardCSS/Dashboard.css";
import "../components/DashboardCSS/Product_Category.css";
import Table from "./Table";
import Mobilenavbar from "./Mobilenavbar";

const tableType = "Dashproduct";
const T_head = ["id#", "name", "price", "discount", "number", "category"];
const T_row = [
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isNew: true,
    isFeatured: false,
    isTrending: false,
    isOneSale: false,
    price: 1000,
    discount: 999,
    number: 0,
    photo: "product1",
    category: "Chair",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Sed ullamcorper elit vel erat congue.",
    isNew: false,
    isFeatured: true,
    isTrending: false,
    isOneSale: false,
    price: 1000,
    discount: 50,
    number: 0,
    photo: "Product2",
    category: "Bedroom",
  },
  {
    id: 3,
    name: "Product 3",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    isNew: true,
    isFeatured: true,
    isTrending: false,
    isOneSale: false,
    price: 1000,
    discount: 500,
    number: 0,
    photo: "Product3",
    category: "Dining",
  },
  {
    id: 4,
    name: "bed",
    description: "Fusce vel arcu elementum, dictum lorem nec.",
    isNew: false,
    isFeatured: false,
    isTrending: true,
    isOneSale: false,
    price: 1000,
    discount: 400,
    number: 0,
    photo: "Product3",
    category: "Lounge",
  },
];

const Dashproduct = () => {
  return (
    <>
      <div className="page">
        <Sidebar />
        <Mobilenavbar />
        <section className="content">
          <header className="dash-header">
            <h3>Products</h3>
          </header>
          <div
            className="box"
            style={{ height: "100px", backgroundColor: "white" }}
          >
            <h5>Add / Update Product</h5>
            <p>Add your product and necessary information from here</p>
          </div>
          <form className="box">
            <div class=" input-div box ">
              <label for="ProID" class="form-label">
                Product ID
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Product ID"
                class="form-control input-field"
                id="ProID"
              />
            </div>
            <div class=" input-div box ">
              <label for="ProName" class="form-label">
                Product Title/Name
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Product Title/Name"
                class="form-control input-field"
                id="ProName"
              />
            </div>
            <div class=" input-div box">
              <label for="ProDes" class="form-label">
                Product Description
              </label>
              <input
                type="text"
                className="form-control input-field"
                id="ProDes"
                placeholder="Product Description"
              />
            </div>
            <div class=" input-div box">
              <label for="ProImg" class="form-label">
                Product Image
              </label>
              <input
                type="text"
                className="form-control input-field"
                id="ProImg"
                placeholder="Product Image url"
              />
            </div>
            <div className=" input-div box">
              <label for="ProCat" class="form-label">
                Category
              </label>
              <select className="select-cat" name="Category" id="ProCat">
                <option value="Bedroom">Bedroom</option>
                <option value="Living">Living</option>
                <option value="Dining">Dining</option>
                <option value="Lounge">Lounge</option>
                <option value="Office Chair">Office Chair</option>
              </select>
            </div>
            <div className="input-div box">
              <label for="ProPrice" class="form-label">
                Product Price
              </label>
              <input
                type="text"
                class="form-control input-field"
                id="ProPrice"
                placeholder="Product Price"
              />
            </div>
            <div className=" input-div box">
              <label for="Discount" class="form-label">
                Discount
              </label>
              <input
                type="text"
                class="form-control input-field"
                id="Discount"
                placeholder="Product Discount"
              />
            </div>
            <div className="buttons">
              <button type="reset" className="cancel-btn btn PC-btn">
                Cancel
              </button>
              <button type="submit" className="sign-in-btn btn PC-btn">
                Update Product
              </button>
              <button type="update" className="sign-in-btn btn PC-btn">
                Add Product
              </button>
            </div>
          </form>
          <div className="box" style={{ overflowX: "auto" }}>
            <Table tableType={tableType} T_head={T_head} T_row={T_row} />
          </div>
        </section>
      </div>
    </>
  );
};
export default Dashproduct;
