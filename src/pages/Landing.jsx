import React from "react";
import axios from "axios";
import Corousal from "../components/Corousal";

export default class Landing extends React.Component {


  constructor()
  {
    super()
    this.state = {
      List:[]
    }
  }

  insideArray = [];

  componentDidMount = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        // this.List = res.data;
        //console.log(this.List);
        this.setState({
         List :[...res.data]
        })
        
   
      });
  };


  render() {
    return (
 
     <>
        <Corousal></Corousal>
        
        {
          this.state.List.slice(0, 4).map((data,i) =>{
              
               
              return (
                <div className="flex items-center bg-gray-100  text-gray-800 ">
                <div className="p-2 w-full">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 sm:col-span-6 md:col-span-3 sm:mb-400">
                    <div className="flex flex-row bg-white shadow-sm rounded p-4" >
            
                      <div className="flex flex-col flex-grow ml-4">
                        <div className="text-sm text-gray-500">
            <div className="col-span-12 lg:col-span-8">
                                    <a href="#" className="inline-block rounded-full text-white 
                                        bg-indigo-700
                                        text-xs font-bold 
                                        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 ">
                                        {this.state.List[i].symbol}
                                    </a>
                                </div></div>
                        <div className="font-bold text-lg">{
                        this.state.List[i].total_supply
                        }</div>
                        <div className="text-gray-300 text-sm">Mam Supply</div>
            
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
            </div>)

                })
            }
            
        
     </>
    );
  }
}