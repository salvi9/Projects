import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID L3O6GGs4tR1VRkRYqVC7oig_5_fW-aZWPRLfqsIqd3Q",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
