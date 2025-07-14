export default function Services(){
    return(
        <>
  <div className="wrap">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <p className="mb-0 phone pl-md-2">
            <Link to="#" className="mr-2">
              <span className="fa fa-phone mr-1" /> +00 1234 567
            </Link>
            <Link to="#">
              <span className="fa fa-paper-plane mr-1" /> youremail@email.com
            </Link>
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end">
          <div className="social-media">
            <p className="mb-0 d-flex">
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-facebook">
                  <i className="sr-only">Facebook</i>
                </span>
              </Link>
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-twitter">
                  <i className="sr-only">Twitter</i>
                </span>
              </Link>
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-instagram">
                  <i className="sr-only">Instagram</i>
                </span>
              </Link>
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-dribbble">
                  <i className="sr-only">Dribbble</i>
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
 
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
              <Link to="index.html">
                Home <i className="ion-ios-arrow-forward" />
              </Link>
            </span>{" "}
            <span>
              Services <i className="ion-ios-arrow-forward" />
            </span>
          </p>
          <h1 className="mb-0 bread">Services</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-no-pt ftco-no-pb">
    <div className="container">
      <div className="row d-flex no-gutters">
        <div className="col-md-5 d-flex">
          <div
            className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0"
            style={{ backgroundImage: "url(/assets/images/about-1.jpg)" }}
          ></div>
        </div>
        <div className="col-md-7 pl-md-5 py-md-5">
          <div className="heading-section pt-md-5">
            <h2 className="mb-4">Why Choose Us?</h2>
          </div>
          <div className="row">
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-stethoscope" />
              </div>
              <div className="text pl-3">
                <h4>Care Advices</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-customer-service" />
              </div>
              <div className="text pl-3">
                <h4>Customer Supports</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-emergency-call" />
              </div>
              <div className="text pl-3">
                <h4>Emergency Services</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
            <div className="col-md-6 services-2 w-100 d-flex">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-veterinarian" />
              </div>
              <div className="text pl-3">
                <h4>Veterinary Help</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row mb-5 pb-5">
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-blind" />
            </div>
            <div className="media-body p-4">
              <h3 className="heading">Dog Walking</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right.
              </p>
              <Link
                to="#"
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-dog-eating" />
            </div>
            <div className="media-body p-4">
              <h3 className="heading">Pet Daycare</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right.
              </p>
              <Link
                to="#"
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-grooming" />
            </div>
            <div className="media-body p-4">
              <h3 className="heading">Pet Grooming</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right.
              </p>
              <Link
                to="#"
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 pt-4">
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-blind" />
            </div>
            <div className="media-body p-4">
              <h3 className="heading">Dog Walking</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right.
              </p>
              <Link
                to="#"
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-dog-eating" />
            </div>
            <div className="media-body p-4">
              <h3 className="heading">Pet Daycare</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right.
              </p>
              <Link
                to="#"
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
          <div className="d-block services text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="flaticon-grooming" />
            </div>
            <div className="media-body p-4">
              <h3 className="heading">Pet Grooming</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right.
              </p>
              <Link
                to="#"
                className="btn-custom d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-chevron-right" />
                <i className="sr-only">Read more</i>
              </Link>
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
              <Link
                to="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Twitter"
              >
                <span className="fa fa-twitter" />
              </Link>
            </li>
            <li className="ftco-animate">
              <Link
                to="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Facebook"
              >
                <span className="fa fa-facebook" />
              </Link>
            </li>
            <li className="ftco-animate">
              <Link
                to="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Instagram"
              >
                <span className="fa fa-instagram" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Latest News</h2>
          <div className="block-21 mb-4 d-flex">
            <Link
              className="img mr-4 rounded"
              style={{ backgroundImage: "url(/assets/images/image_1.jpg)" }}
            />
            <div className="text">
              <h3 className="heading">
                <Link to="#">
                  Even the all-powerful Pointing has no control about
                </Link>
              </h3>
              <div className="meta">
                <div>
                  <Link to="#">
                    <span className="icon-calendar" /> April 7, 2020
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span className="icon-person" /> Admin
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span className="icon-chat" /> 19
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="block-21 mb-4 d-flex">
            <Link
              className="img mr-4 rounded"
              style={{ backgroundImage: "url(/assets/images/image_2.jpg)" }}
            />
            <div className="text">
              <h3 className="heading">
                <Link to="#">
                  Even the all-powerful Pointing has no control about
                </Link>
              </h3>
              <div className="meta">
                <div>
                  <Link to="#">
                    <span className="icon-calendar" /> April 7, 2020
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span className="icon-person" /> Admin
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span className="icon-chat" /> 19
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="py-2 d-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="py-2 d-block">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="py-2 d-block">
                Services
              </Link>
            </li>
            <li>
              <Link to="#" className="py-2 d-block">
                Works
              </Link>
            </li>
            <li>
              <Link to="#" className="py-2 d-block">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="py-2 d-block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Have Link Questions?</h2>
          <div className="block-23 mb-3">
            <ul>
              <li>
                <span className="icon fa fa-map" />
                <span className="text">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li>
                <Link to="#">
                  <span className="icon fa fa-phone" />
                  <span className="text">+2 392 3929 210</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className="icon fa fa-paper-plane" />
                  <span className="text">info@yourdomain.com</span>
                </Link>
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
            <Link to="https://colorlib.com" target="_blank">
              Colorlib.com
            </Link>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
</>

    )
}