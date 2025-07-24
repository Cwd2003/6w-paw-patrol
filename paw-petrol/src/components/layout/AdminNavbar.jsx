import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function AdminNavbar(){
 let isLogin= sessionStorage.getItem("isLogin")
 let name=sessionStorage.getItem("name")
 const nav=useNavigate()
 const logout=()=>{
    Swal.fire({
      title: "Are you sure you want to Logout?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear()
        nav("/login")
        Swal.fire({
          title: "Logout!",
          text: "Logout successfully.",
          icon: "success"
        });
      }
    });
 }
    return(
        <>
         <div className="wrap">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <p className="mb-0 phone pl-md-2">
            <a href="#" className="mr-2">
              <span className="fa fa-phone mr-1" /> +00 1234 567
            </a>
            <a href="#">
              <span className="fa fa-paper-plane mr-1" /> youremail@email.com
            </a>
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end">
          <div className="social-media">
            <p className="mb-0 d-flex">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-facebook">
                  <i className="sr-only">Facebook</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-twitter">
                  <i className="sr-only">Twitter</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-instagram">
                  <i className="sr-only">Instagram</i>
                </span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-dribbble">
                  <i className="sr-only">Dribbble</i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        <span className="flaticon-pawprint-1 mr-2" />
        Paw Patrol
      </a>
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
            <Link to="/admin/breed/manage" className="nav-link">
              Breeds
            </Link>
          </li>
            <li className="dropdown nav-item ">
              <a className="text-dark fw-bolder nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Breeds
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to={"/admin/breed/add"}>Add</Link>
                <Link className="dropdown-item" to={"/admin/breed/manage"}>Manage</Link>
              </div>
            </li>    
          <li className="nav-item">
            <a href="gallery.html" className="nav-link">
              Pets
            </a>
          </li>
       
         
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Adoption
            </Link>
          </li>
            <li className="dropdown nav-item ">
              <a className="text-dark fw-bolder nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to={"/admin/user/manage"}>Users</Link>
                <Link className="dropdown-item" to={"/admin/breed/manage"}>Ngo</Link>
              </div>
            </li>    
           <li className="nav-item">
            {
              isLogin?
              <Link to="#" onClick={logout} className="nav-link">
              Logout {name}
            </Link>
            :
            <Link to="/login" className="nav-link">
              Login
            </Link>
            }
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
        </>
    )
}