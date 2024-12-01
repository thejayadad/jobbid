import React from "react";
import { FiSearch } from "react-icons/fi";
import Form from "next/form";

const SearchBar = () => {
  return (
    <div className="max-w-md mx-auto">
      <Form action={"/search"} className="relative w-full">
        <input
          type="text"
          name="q"
          placeholder="Search..."
          className="w-full py-2 pl-12 pr-4 bg-gray-50 text-gray-800 rounded-xl border border-gray-300 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
        />
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-all duration-200"
        >
          Search
        </button>
      </Form>
    </div>
  );
};

export default SearchBar;
