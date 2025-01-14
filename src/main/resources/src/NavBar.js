import React from "react";
import { NavLink } from "react-router-dom";
import "../src/App.css";

export default function NavBar() {
  return (
    <header className="NavCSS">
      <div className="container mx-auto flex justify-around">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-7 px-3 mr-4 text-red-100 hover:text-green-200 text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            activeClassName="text-red-100 bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100 text-3xl font-bold cursive"
          >
            Search
          </NavLink>
          <NavLink
            to="/prediction"
            activeClassName="text-red-100 bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100  text-3xl font-bold cursive"
          >
            Prediction
          </NavLink>
          <NavLink
            to="/analyse"
            activeClassName="text-red-100 bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100 text-3xl font-bold cursive"
          >
            Analyse
          </NavLink>
          <NavLink
            to="/download"
            activeClassName="text-red-100 bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100 text-3xl font-bold cursive"
          >
            Download
          </NavLink>
          <NavLink
            to="/view"
            activeClassName="text-red-100 bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-100 text-3xl font-bold cursive"
          >
            View
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
