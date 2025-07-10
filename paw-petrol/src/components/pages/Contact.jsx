export default function Contact(){
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
        Pet sitting
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
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="vet.html" className="nav-link">
              Veterinarian
            </a>
          </li>
          <li className="nav-item">
            <a href="services.html" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="gallery.html" className="nav-link">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="pricing.html" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="blog.html" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item active">
            <a href="contact.html" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section
    className="hero-wrap hero-wrap-2"
    style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text align-items-end">
        <div className="col-md-9 ftco-animate pb-5">
          <p className="breadcrumbs mb-2">
            <span className="mr-2">
              <a href="index.html">
                Home <i className="ion-ios-arrow-forward" />
              </a>
            </span>{" "}
            <span>
              Contact <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">Contact</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="heading-section">Contact Form #03</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="wrapper">
            <div className="row mb-5">
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="text">
                    <p>
                      <span>Address:</span> 198 West 21th Street, Suite 721 New
                      York NY 10016
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone" />
                  </div>
                  <div className="text">
                    <p>
                      <span>Phone:</span>{" "}
                      <a href="tel://1234567920">+ 1235 2355 98</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane" />
                  </div>
                  <div className="text">
                    <p>
                      <span>Email:</span>{" "}
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe" />
                  </div>
                  <div className="text">
                    <p>
                      <span>Website</span> <a href="#">yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-7">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Contact Us</h3>
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="name">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">
                            Subject
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                            Message
                          </label>
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            cols={30}
                            rows={4}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="Send Message"
                            className="btn btn-primary"
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-stretch">
                <div
                  className="info-wrap w-100 p-5 img"
                  style={{ backgroundImage: "url(/assets/images/img.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="map" className="map" />
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Petsitting</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <ul className="ftco-footer-social p-0">
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              >
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
              >
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li className="ftco-animate">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
              >
                <span className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Latest News</h2>
          <div className="block-21 mb-4 d-flex">
            <a
              className="img mr-4 rounded"
              style={{ backgroundImage: "url(/assets/images/image_1.jpg)" }}
            />
            <div className="text">
              <h3 className="heading">
                <a href="#">
                  Even the all-powerful Pointing has no control about
                </a>
              </h3>
              <div className="meta">
                <div>
                  <a href="#">
                    <span className="icon-calendar" /> April 7, 2020
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-person" /> Admin
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-chat" /> 19
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="block-21 mb-4 d-flex">
            <a
              className="img mr-4 rounded"
              style={{ backgroundImage: "url(/assets/images/image_2.jpg)" }}
            />
            <div className="text">
              <h3 className="heading">
                <a href="#">
                  Even the all-powerful Pointing has no control about
                </a>
              </h3>
              <div className="meta">
                <div>
                  <a href="#">
                    <span className="icon-calendar" /> April 7, 2020
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-person" /> Admin
                  </a>
                </div>
                <div>
                  <a href="#">
                    <span className="icon-chat" /> 19
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="py-2 d-block">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                About
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="py-2 d-block">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Have a Questions?</h2>
          <div className="block-23 mb-3">
            <ul>
              <li>
                <span className="icon fa fa-map" />
                <span className="text">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li>
                <a href="#">
                  <span className="icon fa fa-phone" />
                  <span className="text">+2 392 3929 210</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon fa fa-paper-plane" />
                  <span className="text">info@yourdomain.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <p className="copyright">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="fa fa-heart" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib.com
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
</>


    )
}