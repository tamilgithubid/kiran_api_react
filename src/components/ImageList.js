import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImage = images.map((image, index) => {
    return <ImageShow key={index} image={image} />;
  });

  return <div className="image-list"> {renderedImage}</div>;
}

export default ImageList;
// the image is a prop from the App.js <Image list/> Component.
