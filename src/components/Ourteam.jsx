import Sidebar from "./Sidebar";
import Table from "./Table";
import "../components/DashboardCSS/Dashboard.css";
import Mobilenavbar from "./Mobilenavbar";
const tableType = "Ourteam";
const T_head = ["Name", "Role", "Email", "Contact", "Joining date"];
const T_row = [
  {
    name: "Ammar Yasser",
    email: "ammar@gmail.com",
    contact: "587529",
    joining_date: "Apr 1, 2024",
    role: "Leader",
  },
  {
    name: "Omar Ibrahem",
    email: "omar@gmail.com",
    contact: "580723",
    joining_date: "Apr 1, 2024",
    role: "member",
  },
  {
    name: "Amr Ahmed",
    email: "amr@gmail.com",
    contact: "578292",
    joining_date: "Apr 1, 2024",
    role: "member",
  },
  {
    name: "Omar Ashraf",
    email: "omarA@gmail.com",
    contact: "502982",
    joining_date: "Apr 1, 2024",
    role: "member",
  },
  {
    name: "Ali Ahmed",
    email: "ali@gmail.com",
    contact: "580928",
    joining_date: "Apr 1, 2024",
    role: "member",
  },
  {
    name: "Mahmoud Atef",
    email: "mahmoud@gmail.com",
    contact: "587052",
    joining_date: "Apr 1, 2024",
    role: "member",
  },
];

const Ourteam = () => {
  return (
    <>
      <div className="page">
        <Sidebar />
        <Mobilenavbar />
        <section className="content">
          <header className="dash-header">
            <h3>Our Team</h3>
          </header>
          <div className="box" style={{ overflowX: "auto" }}>
            <Table tableType={tableType} T_row={T_row} T_head={T_head} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Ourteam;
