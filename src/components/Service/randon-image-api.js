import axios from "axios";

const apiKEY = "EOHDZhe-x8umxUPGy7t2BLpIqoSA8lDS0zwYptUy0k4";
axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function fetchRandomImages(page) {
  const response = await axios.get(
    `https://api.unsplash.com/photos/random?count=10&client_id=${apiKEY}`,
    {
      params: {
        client_id: apiKEY,
        page,
      },
    }
  );
  return response.data;
}
