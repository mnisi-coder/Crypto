import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Home()
{
    return (
        
        <><div class=" bg-indigo-50 h-screen overflow-scroll">
            <Outlet></Outlet>
        </div>
        
        <div class="absolute bottom-0 left-0 ">
       
        <Footer></Footer>
       
        </div>
        
        
        </>
    )
}

export default Home;