import React from 'react';
import axios from "axios";
import { Chart } from "react-google-charts";

export default class DetailView extends React.Component {
      data = [
        [
          { type: "date", label: "Day" },
          "",
          "",
        ],
        [new Date(2014, 0), -0.5, 5.7],
        [new Date(2014, 1), 0.4, 8.7],
        [new Date(2014, 2), 0.5, 12],
        [new Date(2014, 3), 2.9, 15.3],
        [new Date(2014, 4), 6.3, 18.6],
        [new Date(2014, 5), 9, 20.9],
        [new Date(2014, 6), 10.6, 19.8],
        [new Date(2014, 7), 10.3, 16.6],
        [new Date(2014, 8), 7.4, 13.3],
        [new Date(2014, 9), 4.4, 9.9],
        [new Date(2014, 10), 1.1, 6.6],
        [new Date(2014, 11), -0.2, 4.5],
      ];
      
      options = {
        chart: {
          title: "Price Change",
        },
        width: 400,
        height: 500,
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: { axis: "Temps" },
          
        },
        axes: {
          // Adds labels to each axis; they don't have to match the axis names.
          y: {
            Temps: { label: "Temps (Celsius)" },
            Daylight: { label: "Daylight" },
          },
        },
      };


  url = window.location.pathname;
  id = this.url.substring(this.url.lastIndexOf('/') + 1);
  constructor()
  {
    super()
    this.state = {
      details:[],
      name:'',
      price:'',
      percChange:'',
    }
  }

  componentDidMount = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/"+this.id
      ).then((line) => {
      
        this.setState({
            details: line.data,
            name: line.data.description.en,
            price:line.data.market_data.current_price.usd,
            percChange:line.data.market_data.price_change_percentage_1h_in_currency.usd
        })
        
      });

     
  };

  render() {
    
    console.log(this.state.details);
    let name = this.id;
    console.log(this.state.price);
    
    return (
      <>  
      <main className="">
      <div className="grid mb-4 pb-10 px-8 mx-4 ">

          <div className="grid grid-cols-12 gap-6">
              <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                  <div className="col-span-12 mt-8">
                      <div className="flex items-center h-10 intro-y">
                          <h2 className="mr-5 text-lg font-medium truncate">{this.state.details.name}</h2>
                      </div>
                      <div className="grid grid-cols-12 gap-6 mt-5">
                          <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                              href="#">
                              <div className="p-5">
                                  <div className="flex justify-between">
                                  <div className="mt-0 text-3xl font-bold leading-8 text-green-500" >{this.state.details.market_cap_rank}</div>
                                      <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400"
                                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                      </svg>
                                      </div>
                                  </div>
                                  <div className="ml-2 w-full flex-1">
                                      <div>
                                          

                                          <div className="mt-1 pt-5 text-base text-gray-600">market_cap_rank</div>
                                      </div>
                                  </div>
                              </div>
                          </a>
                          <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                              href="#">
                              <div className="p-5">
                                  <div className="flex justify-between">
                                  <div className="mt-0 text-3xl font-bold leading-8">{this.state.details.coingecko_rank}</div>
                                      <div>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400"
                                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                      </svg>
                                      </div>
                                  </div>
                                  <div className="ml-2 w-full flex-1">
                                      <div>
                                          

                                          <div className="mt-1 pt-5 text-base text-gray-600">coingecko_rank</div>
                                      </div>
                                  </div>
                              </div>
                          </a>

                          <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                              href="#">
                              <div className="p-5">
                                  <div className="flex justify-between">
                                  <div className="mt-0 text-3xl font-bold leading-8">{this.state.details.coingecko_score}</div>
                                      <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-600"
                                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                      </svg>
                                      </div>
                                  </div>
                                  <div F="ml-2 w-full flex-1">
                                      <div>
                                          

                                          <div className="mt-0 pt-5  text-base text-gray-600">coingecko_score</div>
                                      </div>
                                  </div>
                              </div>
                          </a>
                          <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                              href="#">
                              <div className="p-5">
                                  <div className="flex justify-between">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400"
                                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                      </svg>
                                      <div
                                          className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                                          <span className="flex items-center">{this.state.percChange}%</span>
                                      </div>
                                  </div>
                                  <div className="ml-2 w-full flex-1">
                                      <div>
                                          <div className="mt-3 text-3xl font-bold leading-8">${this.state.price}</div>

                                          <div className="mt-1 text-base text-gray-600">Price of coin</div>
                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div className="col-span-12 mt-5">
                      <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
                      <Chart
                        chartType="Line"
                        data={this.data}
                        options={this.options}
                        />
                      </div>
                  </div>
                  <div className="col-span-12 mt-5">
                      <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                          <div className="bg-white p-4 shadow-lg rounded-lg">
                              <h1 className="font-bold text-base">{name} Description</h1>
                              <div className="mt-4">
                                  <div className="flex flex-col">
                                      <div className="-my-2 overflow-x-auto">
                                          <div className="py-2 align-middle inline-block min-w-full">
                                              <div
                                                  className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                                 {this.state.name}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
  </>
    )
  }
}