import { useEffect, useState } from "react";
import axios from "axios";
import Offer from "./Offer";

function FetchOffers() {
  const [select, setSelect] = useState("dessert");
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const key = process.env.REACT_APP_KEY;
    const appid = process.env.REACT_APP_APPID;
    axios
      .get(
        `https://api.edamam.com/search?q=${select}&app_id=${appid}&app_key=${key}`
      )
      .then((res) => setOffers(res.data.hits));
    console.log("ASD");
  }, [select, setSelect]);

  return (
    <div>
      <Offer setSelect={setSelect} offers={offers} />
    </div>
  );
}

export default FetchOffers;
