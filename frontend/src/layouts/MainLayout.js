import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({searchText, handelSearchText}) => {
    return (
        <>
            <Navbar 
                searchText={searchText} 
                handelSearchText={handelSearchText}
            />
            <ToastContainer />
            <Outlet />
        </>      
    )
}

export default MainLayout