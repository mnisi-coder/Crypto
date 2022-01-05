function SearchBar() {
  return (
    <nav className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="pr-6 border-r-2 text-2xl font-bold text-gray-500">Stocko-Sami</h1>
        <div className="flex justify-between flex-grow">
          <div className="flex ml-6 items-center ">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4 cursor-pointer text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input className="outline-none text-sm flex-grow bg-gray-100" type="text" placeholder="Search saunas in Finland…" />
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default SearchBar;
