import React from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";

export default class List extends Component {


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

    
      console.log(this.state.List)
    
    return (
      <>
        <SearchBar />

        <ul className="flex flex-col bg-gray-100 p-4">
        {
            //this.List.map(item =>console.log(" index " +" " +item.name) )
           this.state.List.map((data,i) =>{
              
               
              return (<Link to={`/detailView/${this.state.List[i].id}`}><li key={i} className="border-gray-400 flex flex-row mb-2">
              <div className="select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow">
                <div>
                  <img
                    className="h-10 w-10 object-cover object-center rounded-full"
                    src={this.state.List[i].image}
                    alt=""
                  />
                </div>
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">{this.state.List[i].name}</div>
                  <div className="text-gray-600 text-sm">
                    
                    <a
                      href="/"
                      className="inline-block rounded-full text-white 
                        bg-yellow-700
                        text-xs font-bold 
                        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 "
                    >
                      {this.state.List[i].symbol}
                    </a>
                  </div>
                </div>
                
                {this.state.List[i].market_cap_change_percentage_24h <0 ? <div className="text-red-500 ">{this.state.List[i].market_cap_change_percentage_24h}%</div> : <div className="text-green-500 ">↑{this.state.List[i].market_cap_change_percentage_24h}%</div>}
              </div>
            </li></Link>)
            })
        
            }
        </ul>
      </>
    );
  }
}
