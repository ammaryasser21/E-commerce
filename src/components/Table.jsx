import "./DashboardCSS/Table.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenSquare } from "@fortawesome/free-solid-svg-icons";

const Table = (props) => {
  return (
    <>
      {props.tableType === "Dashproduct" ? (
        <table class="table">
          <thead className="t-head">
            <tr>
              {props.T_head.map((item) => (
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#eee",
                  }}
                >
                  {item}
                </th>
              ))}
              <th scope="col" style={{ backgroundColor: "#eee" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="">
            {props.T_row.map((row) => (
              <tr>
                <th scope="row">{row.id}</th>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>{row.discount}</td>
                <td>{row.number}</td>
                <td>{row.category}</td>

                <td>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                      <FontAwesomeIcon
                        icon={faPenSquare}
                        style={{
                          color: "#c1c1c1",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        style={{
                          color: "#e00000",
                          width: "15px",
                          height: "15px",
                          marginLeft: "20px",
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {props.tableType === "Ourteam" ? (
        <table class="table">
          <thead className="t-head">
            <tr>
              {props.T_head.map((item) => (
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#eee",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody class="">
            {props.T_row.map((row) => (
              <tr>
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

      {props.tableType === "Orders" ? (
        <table class="table">
          <thead className="t-head">
            <tr>
              {props.T_head.map((item) => (
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#eee",
                  }}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody class="">
            {props.T_row.map((row) => (
              <tr>
                <th scope="row">{row.invoice_no}</th>
                <td>{row.Order_time}</td>
                <td>{row.cusName}</td>
                <td>{row.method}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {props.tableType === "Dashcategory" ? (
        <table class="table">
          <thead className="t-head">
            <tr>
              {props.T_head.map((item) => (
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#eee",
                  }}
                >
                  {item}
                </th>
              ))}
              <th scope="col" style={{ backgroundColor: "#eee" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="">
            {props.T_row.map((row) => (
              <tr>
                <th scope="row">{row.id}</th>
                <td>{row.category}</td>
                <td>{row.altText}</td>

                <td>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                      <FontAwesomeIcon
                        icon={faPenSquare}
                        style={{
                          color: "#c1c1c1",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        style={{
                          color: "#e00000",
                          width: "15px",
                          height: "15px",
                          marginLeft: "20px",
                        }}
                      />
                    </div>
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
