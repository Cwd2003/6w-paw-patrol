import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "../../firebase"
import { toast } from "react-toastify"
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

export default function Register(){
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [contact, setContact]=useState("")
  const nav=useNavigate()
  const handleForm=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCred)=>{
      // console.log(userCred.user.uid);
      let userId=userCred.user.uid  
      saveData(userId)
    })
    .catch((err)=>{
      toast.error(err.message)
    })
  }

  const saveData=async (userId)=>{
    try{
    let data={
      name:name, 
      email:email,
      contact:contact,
      userType:3, 
      userId:userId, 
      status:true, 
      createdAt:Timestamp.now()
    }
    // console.log(data);
    
    // setDoc(doc(db, collectionName, id))
    await setDoc(doc(db, "users", userId), data)
    toast.success("Registered successfully")
    getUserData(userId)
  }
  catch(error){
    toast.error(error.message)
  }
  }
     const getUserData=async (userId)=>{
        let userDoc=await getDoc(doc(db, "users", userId))
        // console.log(userDoc.data())
        let userData=userDoc.data()
        sessionStorage.setItem("name", userData.name)
        sessionStorage.setItem("email", userData.email)
        sessionStorage.setItem("userType", userData.userType)
         sessionStorage.setItem("userId", userId)
          sessionStorage.setItem("isLogin", true)
          toast.success("Login successfully")
          if(userData.userType==1){
            nav("/admin")
          }else{
            nav("/")
          }
      }
    return(
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
                    Register <i className="ion-ios-arrow-forward" />
                    </span>
                </p>
                <h1 className="mb-0 bread">Register</h1>
                </div>
            </div>
            </div>
        </section>
            <div className="container my-5">
              
            {/* contact form */}
            <div className="row no-gutters">
              <div className="col-md-7">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Register</h3>
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                    onSubmit={handleForm}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Full Name"
                            required
                            value={name}
                            onChange={(e)=>{
                              setName(e.target.value)
                            }}
                          />
                        </div>
                      </div>
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
                            required
                             value={email}
                            onChange={(e)=>{
                              setEmail(e.target.value)
                            }}
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
                            onChange={(e)=>{
                              setPassword(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                     <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Contact
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Contact"
                            minLength={10}
                            maxLength={10}
                             value={contact}
                            onChange={(e)=>{
                              setContact(e.target.value)
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