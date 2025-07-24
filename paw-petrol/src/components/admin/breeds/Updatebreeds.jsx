import { updateDoc, doc, onSnapshot, Timestamp, } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateBreed() {
  const [breedName, setBreedName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [imageName, setImageName] = useState("")
  const [image, setImage] = useState({})

  const [imageurl, setimageurl] = useState()

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      onSnapshot(doc(db, "breeds", id), (BreedData) => {
        const FillData = BreedData.data()

        setBreedName(FillData.breedName)
        setDescription(FillData.description)
        setType(FillData.type)
        setimageurl(FillData.image)
      })
    }

    fetchData()
    console.log(id);

  }, [])
  const handleForm = async (e) => {
    e.preventDefault()
    if (image && imageName) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "images");
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dnxng3fkk/image/upload",
          formData
        );
        saveData(response.data.secure_url)
      } catch (error) {
        toast.error("Error uploading image:", error.message);
      }
    }
    else {
      saveData(imageurl)
    }


  }

  const saveData = async (url) => {
    try {
      let data = {
        breedName,
        description,
        type,
        status: true,
        image: url,
        createdAt: Timestamp.now()
      }
      // console.log(data);
      await updateDoc(doc(db, "breeds", id), data)
      toast.success("Breed Updated successfully")
      setBreedName("")
      setDescription("")
      setType("")
      setImage({})
      setImageName("")
      nav("/admin/breed/manage")

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
              <h3 className="mb-4">Update Breed</h3>
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

