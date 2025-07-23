import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../../firebase"
import { toast } from "react-toastify"
import axios from "axios"

export default function AddBreed() {
  const [breedName, setBreedName] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [imageName, setImageName] = useState("")
  const [image, setImage] = useState({})
  const [url, setUrl] = useState("")
  const handleForm = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "images"); // Replace with your upload preset

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dsomk9tdf/image/upload`, // ✅ fixed cloud name
        formData
      );

      const imageUrl = response.data.secure_url;
      await saveData(imageUrl);
    } catch (error) {
      toast.error("Error uploading image:", error.message);
    }
  }

  const saveData = async (imageUrl) => {
    try {
      let data = {
        breedName,
        description,
        type,
        status: true,
        image: imageUrl,
        createdAt: Timestamp.now()
      }
      // console.log(data);
      await addDoc(collection(db, "breeds"), data)
      toast.success("Breed added successfully")
      setBreedName("")
      setDescription("")
      setType("")
      setImage({})
      setImageName("")
      setUrl("")
    }
    catch (err) {
      toast.error(err.message)
    }
  }
  const changeImage = (e) => {
    // console.log(e.target.files);
    setImageName(e.target.value)
    setImage(e.target.files[0])
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
                  Breed <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Breed</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-5">

        <div className="row no-gutters justify-content-center">
          <div className="col-md-7" style={{ boxShadow: "0px 0px 15px gray" }}>
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h3 className="mb-4">Add Breed</h3>
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
                      <label className="label" htmlFor="name">
                        Breed name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="breedname"
                        id="breedname"
                        placeholder="Breed Name"
                        value={breedName}
                        onChange={(e) => {
                          setBreedName(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="desc">
                        Description
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="desc"
                        id="desc"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="desc">
                        Type
                      </label>
                      <select value={type} onChange={(e) => {
                        setType(e.target.value)
                      }} className="form-control">
                        <option value={""} disabled selected>Choose one</option>
                        <option>Dog</option>
                        <option>Cat</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="label" htmlFor="Image">
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        id="image"
                        placeholder="Image"
                        value={imageName}
                        onChange={changeImage}
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
              {/* {email} */}
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

//create form
// create state
// add value and onchange
// for image create two state one for name and one for image
// pass value as imageName
// use onchange - setImageName(e.target.value) setImage(e.target.files[0])
// onsubmit add handleform and e.preventDefault()
// first store image in cloudinary for that create account in cloudinary and add preset in uploads option
// then use the given code for image upload and paste it. create a state to store url, also install axios in project and import it
//then once url is set create a function save data where data will be stored using add doc
