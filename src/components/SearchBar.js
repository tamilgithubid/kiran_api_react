import "./Searchbar.css";
//import useState here.. for create a state term
import { useState } from "react";

function SearchBar({ onSubmit }) {
  // _____________________
  //
  //create a state for passing the input value/input generate a search term so create a state using the word 'term and setTerm'
  const [term, setTerm] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <>
      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <h3>Enter Search term Here</h3>
          <input value={term} onChange={handleChange} />
        </form>
      </div>
    </>
  );
}

export default SearchBar;
// 1.this submit event used in the <form> element.
// 2.event.preventDefault used for entirely stop that event.
// 3.this onSubmit cars has assigned in the "term".
// 4.onChange and handleChange used for when user changes input values like, add term,delete term and so on.. when user change the event and trigger the handleChange event.
// 5.make a call back function 'handleClick'
