import {updateDoc,doc,onSnapshot,Timestamp,} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateBreed() {
  const [breedName, setBreedName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [imageurl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "breeds", id), (docSnap) => {
      const data = docSnap.data();
      if (data) {
        setBreedName(data.breedName);
        setDescription(data.description);
        setType(data.type);
        setImageUrl(data.image);
      }
    });

    return () => unsub();
  }, [id]);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUploadUrl = imageurl;

      // If a new image is selected, upload it to Cloudinary
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "images");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dnxng3fkk/image/upload",
          formData
        );

        imageUploadUrl = response.data.secure_url;
      }

      const updatedData = {
        breedName,
        description,
        type,
        image: imageUploadUrl,
        status: true,
        createdAt: Timestamp.now(),
      };

      await updateDoc(doc(db, "breeds", id), updatedData);

      toast.success("Breed updated successfully");
      nav("/admin/breed/manage");
    } catch (error) {
      console.error(error);
      toast.error("Error updating breed");
    } finally {
      setLoading(false);
    }
  };

  const changeImage = (e) => {
    setImage(e.target.files[0]);
  };

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
                  <a href="/admin/dashboard">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  Breed <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Update Breed</h1>
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
                id="contactForm"
                className="contactForm"
                onSubmit={handleForm}
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Breed name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Breed Name"
                        value={breedName}
                        onChange={(e) => setBreedName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Type</label>
                      <select
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Choose one
                        </option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                      </select>
                    </div>
                  </div>

                  {imageurl && (
                    <div className="col-md-12 mb-3">
                      <label>Current Image</label>
                      <img
                        src={imageurl}
                        alt="Breed"
                        className="img-fluid"
                        style={{ maxHeight: "200px" }}
                      />
                    </div>
                  )}

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Upload New Image (optional)</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={changeImage}
                        accept="image/*"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value={loading ? "Updating..." : "Update"}
                        className="btn btn-primary"
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
