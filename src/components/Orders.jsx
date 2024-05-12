import Table from "./Table";
import Sidebar from "./Sidebar";
import "../components/DashboardCSS/Dashboard.css";
import Mobilenavbar from "./Mobilenavbar";
const tableType = "Orders";
const T_head = [
  "invoice no",
  "order time",
  "customer name",
  "method",
  "amount",
];
const T_row = [
  {
    invoice_no: "3",
    Order_time: "Apr 27, 2024 9:16 AM",
    cusName: "ammar",
    method: "Cash",
    amount: "$1025.51",
  },
  {
    invoice_no: "4",
    Order_time: "Apr 27, 2024 9:16 AM",
    cusName: "ammar",
    method: "Cash",
    amount: "$1025.51",
  },
];
const Orders = () => {
  return (
    <>
      <div className="page">
        <Sidebar />
        <Mobilenavbar />
        <section className="content">
          <header className="dash-header">
            <h3>Orders</h3>
          </header>
          <div className="box" style={{ overflowX: "auto" }}>
            <Table tableType={tableType} T_row={T_row} T_head={T_head} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Orders;
