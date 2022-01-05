import React, { Component } from 'react'
import axios from "axios";
export default class calculator extends Component {



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
            <div class="py-32 px-10 min-h-screen ">
          
            <div class="bg-white p-10 sm:w-screen md:w-screen lg:w-1/2 mx-auto">
                 <div class="flex items-center mb-5">
       
      
        <select class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none">
                {
                this.state.List.map((data,i) =>{
                    
                    return (<option>{this.state.List[i].name}</option>)
                })
                }
          
        </select>
      </div>

      
            </div>

            <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
                 <div class="flex items-center mb-5">
       
        
        <select class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none">
            <option>Surabaya</option>
            <option>Jakarta</option>
            <option>bandung</option>
            <option>Tangerang</option>
        </select>
      </div>

      
            </div>
            </div>
        )
    }
}
