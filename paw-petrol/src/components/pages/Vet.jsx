export default function Vet(){
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
          <li className="nav-item active">
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
          <li className="nav-item">
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
              Veterinarian <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">Meet Our Veterinary Doctor</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: "url(/assets/images/staff-1.jpg)" }}
              />
            </div>
            <div className="text pt-3 px-3 pb-4 text-center">
              <h3>Lloyd Wilson</h3>
              <span className="position mb-2">Health Coach</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social text-center">
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-google" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: "url(/assets/images/staff-2.jpg)" }}
              />
            </div>
            <div className="text pt-3 px-3 pb-4 text-center">
              <h3>Rachel Parker</h3>
              <span className="position mb-2">Life &amp; Business Coach</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social text-center">
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-google" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: "url(/assets/images/staff-3.jpg)" }}
              />
            </div>
            <div className="text pt-3 px-3 pb-4 text-center">
              <h3>Ian Smith</h3>
              <span className="position mb-2">Executive Coach</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social text-center">
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-google" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: "url(/assets/images/staff-4.jpg)" }}
              />
            </div>
            <div className="text pt-3 px-3 pb-4 text-center">
              <h3>Alicia Henderson</h3>
              <span className="position mb-2">Health Coach</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social text-center">
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-google" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: "url(/assets/images/staff-5.jpg)" }}
              />
            </div>
            <div className="text pt-3 px-3 pb-4 text-center">
              <h3>Lloyd Wilson</h3>
              <span className="position mb-2">Executive Coach</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social text-center">
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-google" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: "url(/assets/images/staff-6.jpg)" }}
              />
            </div>
            <div className="text pt-3 px-3 pb-4 text-center">
              <h3>Rachel Parker</h3>
              <span className="position mb-2">Health Coach</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social text-center">
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-google" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: "url(/assets/images/staff-7.jpg)" }}
              />
            </div>
            <div className="text pt-3 px-3 pb-4 text-center">
              <h3>Ian Smith</h3>
              <span className="position mb-2">Health Coach</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social text-center">
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-google" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="staff">
            <div className="img-wrap d-flex align-items-stretch">
              <div
                className="img align-self-stretch"
                style={{ backgroundImage: "url(/assets/images/staff-8.jpg)" }}
              />
            </div>
            <div className="text pt-3 px-3 pb-4 text-center">
              <h3>Fred Henderson</h3>
              <span className="position mb-2">Executive Coach</span>
              <div className="faded">
                <p>
                  I am an ambitious workaholic, but apart from that, pretty
                  simple person.
                </p>
                <ul className="ftco-social text-center">
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-google" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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