import React, { useState } from 'react';

const Header = ({ category, setCategory, searchTerm, setSearchTerm,sorting,setSorting }) => {
  return (
    <div className="navbar bg-base-200">
      <div className="ps-4">
        <a className="text-lg font-bold">Product Listing</a>
      </div>
      <div className="flex grow justify-end px-2">
        <div className="flex items-stretch gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">{sorting}</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
              <li><a onClick={() => setSorting('LH')}>Low To High</a></li>
              <li><a onClick={() => setSorting('HL')}>High To Low</a></li>
              <li><a onClick={() => setSorting('Sort')}>None</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">{category}</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
              <li><a onClick={() => setCategory('Shoes')}>Shoes</a></li>
              <li><a onClick={() => setCategory('Shirts')}>Shirts</a></li>
              <li><a onClick={() => setCategory('Pants')}>Pants</a></li>
              <li><a onClick={() => setCategory('Phones')}>Phones</a></li>
              <li><a onClick={() => setCategory('Watch')}>Watches</a></li>
              <li><a onClick={() => setCategory('Category')}>All</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
