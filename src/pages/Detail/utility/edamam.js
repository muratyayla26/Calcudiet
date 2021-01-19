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
    console.log(data);
    const recipe = {
      name: data[0].label,
      image: data[0].image,
      url: data[0].url,
      allergic:
        data[0].cautions.length === 0 || data[0].cautions[0] === "FODMAP"
          ? ""
          : data[0].cautions[0],
      ingredients: data[0].ingredientLines,
      service: data[0].yield || 1, //number
      calory: data[0].calories, //number
      nutrition: data[0].digest, //total: number geliyor
      id: data[0].uri.split("_")[1],
    };

    return recipe;
  } catch (e) {
    console.log(e);
  }
};
