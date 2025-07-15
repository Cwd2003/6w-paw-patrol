import { Link } from "react-router-dom"
export default function Header(){
    return(
        <>
        <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <Link className="navbar-brand" to="index.html">
        <span className="flaticon-pawprint-1 mr-2" />
        Pet sitting
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="About" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Vet" className="nav-link">
              Veterinarian
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
    )
}