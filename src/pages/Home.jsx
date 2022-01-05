import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Home()
{
    return (
        
        <>
        <div className="flex flex-col h-screen justify-between">
            <div className=" bg-indigo-50 flex-grow overflow-scroll">
            <Outlet></Outlet>
        </div>
        
        <div className="absolute bottom-0 left-0 ">
       
        <Footer></Footer>
       
        </div>
        </div>
        
        </>
    )
}

export default Home;