import axios from "axios";

const searchImages = async (term) => {
  //import here the axios to make a request...
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    //this is a "Option object"
    headers: {
      // Add the Authorization to Unsplash understands who making the request.. this Authorization must have Capitalization.
      Authorization: " Client-ID DztPMFs3U619OF5ljYsJ7PQ6ea2e3krP9_zgDoGhmJA"
    },
    params: {
      query:term,
    },
  });

console.log(response)
  return response.data.results;
};
export default searchImages;
