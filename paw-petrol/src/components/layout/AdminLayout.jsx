import { useEffect } from "react"
import AdminNavbar from "./AdminNavbar"
import Footer from "./Footer"
import { Outlet, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
export default function AdminLayout(){
    ///page restrictions 
    let isLogin=sessionStorage.getItem("isLogin")
    let userType=sessionStorage.getItem("userType")
    const nav=useNavigate()
    useEffect(()=>{
        if(!isLogin || userType!=1){
            toast.error("Please login")
            nav("/login")
        }
    },[])
    return(
        <>
        <AdminNavbar/>
        <Outlet/>   {/**child loads */}
        <Footer/>
        </>
    )
}