import { collection, onSnapshot, query, where } from "firebase/firestore";
import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { db } from "../../../Firebase";

export default function ManageBreed(){
    const [breeds, setBreeds]=useState([])
    const fetchData=()=>{
      let q=  query(collection(db, "breeds") 
    //   ,where("type","==","Dog")
    )
      onSnapshot(q,(breedsCol)=>{
        // console.log(breedsCol);
        // console.log(breedsCol.docs);
        setBreeds(breedsCol.docs?.map((el)=>{
            // data access
            return {...el.data(), id:el.id};
        })) 
        // console.log(breedsDoc);
        // setBreeds(breedsDoc)
        
      })
    }
    // useEffect(fn, [dependency])
    useEffect(()=>{
        fetchData()
    },[])
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
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
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