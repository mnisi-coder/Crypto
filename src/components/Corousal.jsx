import { Link } from "react-router-dom";

function Corousal()
{
    return (
        <header>
        <nav className="p-6">
          <div className="flex justify-between items-center">
            <h1 className="pr-6 border-r-2 text-2xl font-bold text-gray-500">Stocko-Sami</h1>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
          </div>
          </div>
          

        </nav>
        
        <div className="container mx-auto bg-gray-400 h-96 rounded-md flex items-center justify-center">
          <div className="sm:ml-20 text-gray-50 text-center sm:text-left">
            <h1 className="text-5xl font-bold mb-4">
             Stock-Sami
            </h1>
            <p className="text-lg inline-block sm:block">Learn more about Stoko-Sami</p><br />
            <Link to="/About"><button className="mt-8 px-4 py-2 bg-violet-400 rounded hover:bg-white-100 active:">About</button></Link>
          </div>
        </div>
      </header>
    )

}

export default Corousal;