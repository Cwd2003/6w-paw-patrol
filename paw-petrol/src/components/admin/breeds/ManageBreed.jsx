import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { db } from "../../../firebase";
import { toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";
import Swal from "sweetalert2";

export default function ManageBreed(){
    const [breeds, setBreeds]=useState([])
    const [load, setLoad]=useState(true)
    const fetchData=()=>{
      let q=  query(collection(db, "breeds") 
    //   ,where("type","==","Dog")
    )
    onSnapshot(q,(breedsCol)=>{
        setBreeds(breedsCol.docs?.map((el)=>{
            return {...el.data(), id:el.id};
        })) 
        setLoad(false)
      })
    }

    
    // useEffect(fn, [dependency])
    useEffect(()=>{
        fetchData()
    },[])


    const DeleteBreed=(BreedId)=>{
       
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
        if (result.isConfirmed) {
            await deleteDoc(doc(db,"breeds",BreedId))   
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
            });
        }
        }); 
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
                    <Link to={"/admin"}>
                        Home <i className="ion-ios-arrow-forward" />
                    </Link>
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
            {load?
                <PacmanLoader color="#00bd56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
                <div className="row">
                    <div className="col table-responsive">
                        <div className="d-flex justify-content-end">
                            <Link to={"/admin/breed/add"} className="btn btn-outline-primary">Add New +</Link>
                        </div>
                        <h1>Manage Breeds</h1>
                        <table className="table table-hover table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>Sno</th>
                                    <th>Image</th>
                                    <th>Breed name</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                 

                                </tr>
                            </thead>
                            <tbody>
                                {breeds?.map((el,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>
                                                <img src={el?.image} style={{height:"50px", width:"50px"}}/>
                                            </td>
                                            <td>{el?.breedName}</td>
                                            <td>{el?.type}</td>
                                            <td>{el?.description}</td>
                                            <td>
                                                
                                            <Link to={`/admin/breed/update/${el.id}`} className="btn btn-primary">
                                            <i className="fa fa-edit"></i>
                                            </Link>
                                            <button className="btn btn-outline-danger mx-2" onClick={()=>{
                                                DeleteBreed(el.id)
                                            }}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                        {/* <div className="row">
                            {
                                breeds.map((el)=>{
                                    return <div className="col-4 mt-3">
                                <div className="card" >
                                        <img className="card-img-top" src={el.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{el.breedName}</h5>
                                            <p className="card-text">
                                            {el.description}
                                            </p>
                                            <p>{el.type}</p>
                                            <button onClick={()=>{
                                                DeleteBreed(el.id)
                                            }} className="btn btn-danger">
                                            Delete
                                            </button>
                                        </div>
                                </div>
                                

                            </div>
                                })
                            }
                            
                        </div> */}
                    </div>
                </div>
            }
        </div>
        </>
    )
}


//component create
// table structure 
// useEffect to load data on comp load 
// function bnaya
// query create and onsnapshot 
// print collection 
// map function
// data ko print 
// set breeds 
// inside return on breeds add map to load tr 