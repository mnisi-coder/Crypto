import React from "react";

import Corousal from "../components/Corousal";

export default class Landing extends React.Component {
  render() {
    return (
      <>
     
        <Corousal></Corousal>

        <div class="flex items-center bg-gray-100  text-gray-800 ">
  <div class="p-4 w-full">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 sm:col-span-6 md:col-span-3 sm:mb-400">
        <div class="flex flex-row bg-white shadow-sm rounded p-4">

          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">
<div class="col-span-12 lg:col-span-8">
                        <a href="#" class="inline-block rounded-full text-white 
                            bg-indigo-700
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 ">
                            005930
                        </a>
                    </div></div>
            <div class="font-bold text-lg">23.6K </div>
            <div class="text-gray-300 text-sm">Followers</div>

          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-3">
               <div class="flex flex-row bg-white shadow-sm rounded p-4">

          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">
<div class="col-span-12 lg:col-span-8">
                        <a href="#" class="inline-block rounded-full text-white 
                            bg-black
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 ">
                            AAPL
                        </a>
                    </div></div>
    <div class="font-bold text-lg">13.8K </div>
            <div class="text-gray-300 text-sm">Followers</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-3">
                <div class="flex flex-row bg-white shadow-sm rounded p-4">

          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">
<div class="col-span-12 lg:col-span-8">
                           <a href="#" class="inline-block rounded-full text-white 
                            bg-black
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 ">
                            TSLA
                        </a>     
                    </div></div>
         <div class="font-bold text-lg">23.6K </div>
            <div class="text-gray-300 text-sm">Followers</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-3">
                       <div class="flex flex-row bg-white shadow-sm rounded p-4">

          <div class="flex flex-col flex-grow ml-4">
            <div class="text-sm text-gray-500">
<div class="col-span-12 lg:col-span-8">
                         <a href="#" class="inline-block rounded-full text-white 
                            bg-yellow-700
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 ">
                            GOOGL
                        </a>   
                    </div></div>
                 <div class="font-bold text-lg">7.74K </div>
            <div class="text-gray-300 text-sm">Followers</div>
          </div>
        </div>
      </div></div></div></div>
      </>
    );
  }
}