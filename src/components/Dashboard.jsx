import "../components/DashboardCSS/Dashboard.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUsers,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import Mobilenavbar from "./Mobilenavbar";

const Dashboard = () => {
  return (
    <>
      <div className="page">
        <Sidebar />
        <Mobilenavbar />
        <section className="content">
          <header className="dash-header">
            <h3>Dashboard Overview</h3>
          </header>
          <div className="box">
            <div className="dash-cards">
              <div className="card">
                <p>Products Sold</p>
                <span>4565</span>
                <i>
                  <FontAwesomeIcon icon={faCartShopping} />
                </i>
              </div>
              <div className="card">
                <i></i>
                <p>All-Time Sales</p>
                <span>$00.0</span>
                <i>
                  <FontAwesomeIcon
                    icon={faMoneyBill1}
                    style={{ fontSize: "50px" }}
                  />
                </i>
              </div>
              <div className="card">
                <p>New Customers</p>
                <span>4565</span>
                <i>
                  <FontAwesomeIcon icon={faUsers} />
                </i>
              </div>
              <div className="card">
                <p>Customer Satisfaction</p>
                <span>99%</span>
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              </div>
            </div>
            {/* <div className="order-stats">
              <div className="total-orders">
                <div className="i-bg">
                  <FontAwesomeIcon
                    className="cart-icon"
                    icon={faCartShopping}
                  />
                  <FontAwesomeIcon icon={faBorderAll} />
                </div>
                <div>
                  <p>Total orders</p>
                  <span>0</span>
                </div>
              </div>
            </div> */}
            {/*  */}
            <div>{/* some statistics charts */}</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
