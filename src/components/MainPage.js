import React from "react";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            {" "}
            <img
              src={require("../t.png")}
              width="50"
              height="50"
              alt="logo"
              id="logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <a
                  className="nav-link active"
                  id="addticket"
                  aria-current="page"
                  href="#"
                >
                  Add Ticket
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link font-weight-bold"
                  id="dashboard"
                  href="#"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
    );
  }
}

/*const MainPage = () => {
  return (
    <div>
        <nav className="navbar navbar fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
    <img src="../TICKITO_LOGO_SIH_.jpg" width="30" height="30" alt=""/>
  </a>
   
</nav>


      
    </div>
  )
}*/

export default MainPage;
