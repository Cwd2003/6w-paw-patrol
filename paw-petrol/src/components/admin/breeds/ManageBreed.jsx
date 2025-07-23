import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import { toast } from "react-toastify";

export default function ManageBreed() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "breeds"));

    const unsubscribe = onSnapshot(q, (breedsCol) => {
      const breedList = breedsCol.docs.map((el) => ({
        ...el.data(),
        id: el.id,
      }));
      setBreeds(breedList);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  const DeleteBreed = async (breedId) => {
    const confirm = window.confirm("Are you sure you want to delete this breed?");
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, "breeds", breedId));
      toast.success("Breed deleted successfully");
    } catch (err) {
      toast.error("Failed to delete breed");
      console.error(err);
    }
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
                  <Link to={"/admin"}>
                    Home <i className="ion-ios-arrow-forward" />
                  </Link>
                </span>
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
        <div className="row">
          <div className="col table-responsive">
            <div className="d-flex justify-content-end mb-3">
              <Link to="/admin/breed/add" className="btn btn-outline-primary">
                Add New +
              </Link>
            </div>

            <h2>Manage Breeds</h2>

            <table className="table table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Sno</th>
                  <th>Image</th>
                  <th>Breed Name</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {breeds.length > 0 ? (
                  breeds.map((el, index) => (
                    <tr key={el.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={el.image}
                          alt={el.breedName}
                          style={{ height: "50px", width: "50px", objectFit: "cover" }}
                        />
                      </td>
                      <td>{el.breedName}</td>
                      <td>{el.type}</td>
                      <td>{el.description}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => DeleteBreed(el.id)}
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <Link
                          to={`/admin/breed/update/${el.id}`}
                          className="btn btn-primary"
                        >
                          Update
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No breeds found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
