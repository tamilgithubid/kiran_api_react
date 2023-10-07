import { useState } from "react";
import "./App.css";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  //create a handleSubmit Function
  //'term is a searching term from the child searchbar component'
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result)
  };
  return (
    //passing the event of handleSubmit into the input of searchbar,the searchbar component receive that prop.
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
//import searchImages from api.js
//pass the searchImages into the handleSubmit function.
//import state from react.
//create a state for using the useState.
//use the state into the handleSubmit method for update image from api.
//set the prop as images in the <ImageList/> JSX component.
