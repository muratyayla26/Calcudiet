import axios from "axios";
const apiKey = process.env.REACT_APP_EDAMAM_KEY;
const apiId = process.env.REACT_APP_EDAMAM_ID;
const url = "https://api.edamam.com/search"

export const search = async inputValue => {
    const urlToFetch = url + "?q=" + "eggplant" + "&app_id=" +
    apiId + "&app_key=" + apiKey + "&from=0&to=6";

    try {
        const { data }= await axios.get(urlToFetch);
        console.log(data);
        const recipes = data.hits.map( hit => {
            return {
                name: hit.recipe.label,
                image: hit.recipe.image,
                url: hit.recipe.url,
                allergic: hit.recipe.cautions[0] || "",
                ingredients: hit.recipe.ingredientLines,
                service: hit.recipe.yield,
                calory: hit.recipe.calories,
                nutrition: hit.recipe.digest
            }
        });
        return recipes;
    } catch (e) {
        console.log(e);
    }
};