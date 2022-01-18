import React from "react";

const Search = () => {
  return (
    <form className="search-wrap">
      <div className="form-block">
        <i className='bx bx-search'></i>
        <input className="search-input" type="search" placeholder="Type to search" />
      </div>
      <select name="choose" id="select">
        <option value="option1">All categories</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
      </select>
    </form>
  )
}

export default Search;