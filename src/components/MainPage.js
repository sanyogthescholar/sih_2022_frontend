import React from "react";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg " id="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="src\TICKITO_LOGO_SIH_.jpg"/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" id="addticket" aria-current="page" href="#">
                    Add Ticket
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-weight-bold" id="dashboard" href="#">
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
