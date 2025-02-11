import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import useAuth from "../Hooks/useAuth";


const MainLayout = () => {
    const {dayTheme} = useAuth()
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div className={`${dayTheme? 'bg-amber-50 ' : 'bg-gray-800'} min-h-[calc(100vh-377px)] pb-12`}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;