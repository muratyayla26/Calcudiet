import axios from "axios";

const apiKey = process.env.REACT_APP_EDAMAM_KEY_A;
const apiId = process.env.REACT_APP_EDAMAM_ID_A;

export const fetchData = async (query, from, to) => {
  const url = `https://api.edamam.com/search?q=${query}&from=${from}&to=${to}&app_id=${apiId}&app_key=${apiKey}`;
  try {
    const { data } = await axios.get(url);
    return data.hits;
  } catch (e) {
    console.log(e);
  }
};
