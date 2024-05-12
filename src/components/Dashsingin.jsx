import "../components/DashboardCSS/Dashboard.css";
import Mobilenavbar from "./Mobilenavbar";
import "./css/Login.css";
const Dashsignin = () => {
  return (
    <>
      <Mobilenavbar />
      <div className="login-area">
        <div className="login-box">
          <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Login</h3>
          <form className="login-form">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email *
              </label>
              <input
                type="email"
                placeholder="example.com"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password *
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="d-grid gap-2">
              <button type="submit" class="sign-in-btn btn">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashsignin;
