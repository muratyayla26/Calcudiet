import axios from "axios";
const apiKey = process.env.REACT_APP_EDAMAM_KEY;
const apiId = process.env.REACT_APP_EDAMAM_ID;
const url = "https://api.edamam.com/search";
const urlId = "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_";

export const search = async (inputId) => {
  const urlToFetch =
    url + "?r=" + urlId + inputId + "&app_id=" + apiId + "&app_key=" + apiKey;

  try {
    const { data } = await axios.get(urlToFetch);
    const recipe = {
      label: data[0].label,
      image: data[0].image,
      url: data[0].url,
      cautions: data[0].cautions,
      ingredientLines: data[0].ingredientLines,
      yield: data[0].yield || 1,
      calories: data[0].calories,
      digest: data[0].digest,
      uri: data[0].uri,
    };
    return recipe;
  } catch (e) {
    console.log(e);
  }
};
