import axios from 'axios';


const apiKey = process.env.REACT_APP_EDAMAM_KEY;
const apiId = process.env.REACT_APP_EDAMAM_ID;


export const fetchData =async (query) => {
    const url = `https://api.edamam.com/search?q=${query}&from=0&to=6&app_id=${apiId}&app_key=${apiKey}`;
    try{
        const {data} = await axios.get(url);
        return data.hits;



    }catch(e){
        console.log(e)
    }
} 
