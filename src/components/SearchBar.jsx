function SearchBar() {
  return (
    <div class="flex justify-between p-4 bg-white mt-3 rounded-xl shadow-lg ">
      <h1 class="text-xl font-bold text-gray-700">Stock-Sami</h1>
      <div class="flex justify-between w-2/5">
        <div class="flex items-center border-2 p-2 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            class="ml-2 outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
