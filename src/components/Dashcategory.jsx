import Sidebar from "./Sidebar";
import "../components/DashboardCSS/Product_Category.css";
import "../components/DashboardCSS/Dashboard.css";
import Table from "./Table";
import Mobilenavbar from "./Mobilenavbar";

const tableType = "Dashcategory";
const T_head = ["ID#", "Category", "Alternate Text"];
const T_row = [
  {
    id: 1,
    category: "Bedroom",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png",
    altText: "Bedroom furniture",
  },
  {
    id: 2,
    category: "Living",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png",
    altText: "Living room furniture",
  },
  {
    id: 3,
    category: "Dining",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png",
    altText: "Dining room furniture",
  },
  {
    id: 4,
    category: "Lounge",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png",
    altText: "Lounge furniture",
  },
  {
    id: 5,
    category: "Office Chair",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0864/0607/0562/collections/living-room.png",
    altText: "Office chairs",
  },
];

const Dashcategory = () => {
  return (
    
      <div className="page">
        <Sidebar />
        <Mobilenavbar />
        <section className="content">
          <header className="dash-header">
            <h3>Categories</h3>
          </header>
          <div
            className="box"
            style={{ height: "100px", backgroundColor: "white" }}
          >
            <h5>Add / Update Category</h5>
            <p>Add your Category and necessary information from here</p>
          </div>
          <form className="box">
            <div className=" d-flex justify-content-between align-items-center box ">
              <label htmlFor="CatID" className="form-label">
                Category ID
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Category ID"
                id="CatID"
              />
            </div>
            <div className=" d-flex justify-content-between align-items-center box">
              <label htmlFor="CatName" className="form-label">
                Category Name
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Product Name/Title"
                id="CatName"
              />
            </div>
            <div className=" d-flex justify-content-between align-items-center box">
              <label htmlFor="CatImg" className="form-label">
                Category Image
              </label>
              <input
                type="text"
                className="form-control input-field"
                id="CatImg"
                placeholder="Category Image url"
              />
            </div>
            <div className=" d-flex justify-content-between align-items-center box">
              <label htmlFor="CatAlt" className="form-label">
                Alternate Text
              </label>
              <input
                className="form-control input-field"
                type="text"
                placeholder="Alternate Text"
                id="CatAlt"
              />
            </div>
            <div className="buttons">
              <button type="reset" className="cancel-btn btn PC-btn">
                Cancel
              </button>
              <button type="submit" className="sign-in-btn btn PC-btn">
                Update Category
              </button>
              <button type="update" className="sign-in-btn btn PC-btn">
                Add Category
              </button>
            </div>
          </form>
          <div className="box" style={{ overflowX: "auto" }}>
            <Table tableType={tableType} T_head={T_head} T_row={T_row} />
          </div>
        </section>
      </div>
    
  );
};
export default Dashcategory;
