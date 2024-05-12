import "./DashboardCSS/Table.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenSquare } from "@fortawesome/free-solid-svg-icons";

const Table = ({ tableType, T_head, T_row, onEdit, onDelete }) => {
  return (
    <>
      {tableType === "Dashproduct" ? (
        <table className="table">
          <thead className="t-head">
            <tr>
              {T_head.map((item) => (
                <th key={item.id}
                  scope="col"
                >
                  {item}
                </th>
              ))}
              <th scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {T_row.map((row) => (

            
              <tr key={row.name}>
                <th scope="row">{row.id}</th>
                <td>{row.name}</td>
                <td>{row.category}</td>
                <td> <img style={{width:"50px"}} src={row.photo} alt=""  /></td>
                <td>{row.isNew ? "Yes" : "No"}</td>

                <td>{row.isFeatured? "Yes" : "No"}</td>
                <td>{row.isTrending? "Yes" : "No"}</td>
                <td>{row.isOneSale? "Yes" : "No"}</td>
                <td>{row.price}</td>
                <td>{row.discount}</td>
                <td>{row.capacity}</td>
                
                

                <td>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={() => onEdit(row)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none"
                      }}>
                      <FontAwesomeIcon
                        icon={faPenSquare}
                        style={{
                          color: "#c1c1c1",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </button>
                    <button
                      onClick={() => onDelete(row.id)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none"
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        style={{
                          color: "#e00000",
                          width: "15px",
                          height: "15px",
                          marginLeft: "20px",
                        }}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {tableType === "Ourteam" ? (
        <table className="table">
          <thead className="t-head">
            <tr>
              {T_head.map((item) => (
                <th
                  key={item.name}
                  scope="col"
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {T_row.map((row) => (
              <tr key={row.name}>
                <th scope="row">{row.name}</th>
                <td>{row.role}</td>
                <td>{row.email}</td>
                <td>{row.contact}</td>
                <td>{row.joining_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {tableType === "Orders" ? (
        <table className="table">
          <thead className="t-head">
            <tr>
              {T_head.map((item) => (
                <th
                  key={item.id}
                  scope="col"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {T_row.map((row) => (
              <tr key={row.invoice_no}>
                <th scope="row">{row.invoice_no}</th>
                <td>{row.Order_time}</td>
                <td>{row.cusName}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {tableType === "Dashcategory" ? (
        <table className="table">
          <thead className="t-head">
            <tr>
              {T_head.map((item) => (
                <th
                  key={item.id}
                  scope="col"
                >
                  {item}
                </th>
              ))}
              <th scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {T_row.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.id}</th>
                <td>{row.category}</td>
                <td>{row.altText}</td>

                <td>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none"
                      }}
                      onClick={() => onEdit(row)}
                    >
                      <FontAwesomeIcon
                        icon={faPenSquare}
                        style={{
                          color: "#c1c1c1",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </button>
                    <button
                      onClick={() => onDelete(row.id)}
                      style={{
                        backgroundColor: "transparent",
                        border: "none"
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        style={{
                          color: "#e00000",
                          width: "15px",
                          height: "15px",
                          marginLeft: "20px",
                        }}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default Table;
