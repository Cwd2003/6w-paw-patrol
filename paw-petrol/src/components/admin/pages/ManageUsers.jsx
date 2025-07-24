import { collection, deleteDoc, doc, getCountFromServer, limit, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { db } from "../../../Firebase";
import { toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";
import Swal from "sweetalert2";
import Switch from "react-switch";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import 'react-responsive-pagination/themes/classic-light-dark.css';
export default function ManageUsers(){
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages]=useState(1)
    const LIMIT=10
    const [users, setUsers]=useState([])
    const [load, setLoad]=useState(true)
    const fetchData=()=>{
      let q=  query(collection(db, "users")
    //   , where("status","==", true)
    )
    onSnapshot(q,async (userCol)=>{
        setUsers(userCol.docs?.map((el)=>{
            return {...el.data(), id:el.id};
        })) 
        setLoad(false)
       let userCount=await getCountFromServer(collection(db, "users"))
       let totalData=userCount.data().count
        setTotalPages(Math.ceil(totalData/LIMIT)) 
      })
    }

    
    // useEffect(fn, [dependency])
    useEffect(()=>{
        fetchData()
    },[])


    const changeStatus=(userId, status)=>{
       
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, ${status?"Block":"un-block"}!`
        }).then(async (result) => {
        if (result.isConfirmed) {
            let data={
                status:!status
            }
            await updateDoc(doc(db,"users",userId), data)   
            Swal.fire({
            title: `${status?"Blocked":"un-block"}!`,
            // text: "Your file has been deleted.",
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
                    Users <i className="ion-ios-arrow-forward" />
                    </span>
                </p>
                <h1 className="mb-0 bread">Users</h1>
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
                      
                        <h1>Manage Users</h1>
                        <table className="table table-hover table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>Sno</th>
                                    <th>Full name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                 

                                </tr>
                            </thead>
                            <tbody>
                                {users?.slice((currentPage-1)*LIMIT, ((currentPage-1)*LIMIT)+LIMIT)?.map((el,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{(currentPage-1)*LIMIT+index+1}</td>
                                            <td>{el?.name}</td>
                                            <td>{el?.email}</td>
                                            <td>{el?.contact}</td>
                                            {/* <td>{el?.status?.toString()}</td> */}
                                            <td>
                                                {el.status?"Active":"In-active"}
                                            </td>
                                            <td>
                                            <button className="btn  mx-2" >
                                                <Switch checked={el.status} onChange={()=>{
                                                    changeStatus(el.id, el.status)
                                                }}/>
                                            </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={6}>
                                         <ResponsivePagination
                                            current={currentPage}
                                            total={totalPages}
                                            onPageChange={setCurrentPage}
                                            />
                                    </td>
                                </tr>
                            </tfoot>
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


