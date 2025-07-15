
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState("deep@gmail.com")
  const [password, setPassword] = useState("");
  const changeEmail = (event) => {
    console.log(event);
    console.log("hello", event.target.value);
    setEmail(event.target.value)
  }
  let nav = useNavigate()
  const handleForm = (e) => {
    e.preventDefault() //stop from reload
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        console.log("sign in", userCred.user.uid);
        toast.success("Login successfully!!")
        nav("/")
      })
      .catch((error) => {
        toast.error(error.message);
      })
  }
  const signInGoogle = () => {
    let provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((userCred) => {
        console.log(userCred.user.uid);
        toast.success("Login successfully")
        nav("/")
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <>
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
                  Login <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Login</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-5">
        {/* <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                                </label>
                                <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                                </label>
                                <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>

                    </div>
                </div> */}

        {/* contact form  */}
        <div className="row no-gutters">
          <div className="col-md-7">
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h3 className="mb-4">Login</h3>
              <form
                onSubmit={handleForm}
                id="contactForm"
                name="contactForm"
                className="contactForm"
              >
                <div className="row">

                  <div className="col-md-12">
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
                        value={email}
                        onChange={changeEmail}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="subject">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Submit"
                        className="btn btn-primary"
                      />
                      <div className="submitting" />
                    </div>
                  </div>
                </div>
              </form>
              <button type="button" onClick={signInGoogle} className="btn btn-danger"><i class="bi bi-google"></i> Sign In with google</button>

              <div>
                Don't have an Account?
                <Link to={"/register"}>Register</Link>
              </div>
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
    </>
  )
}