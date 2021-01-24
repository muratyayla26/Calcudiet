import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Fade";
function OfferTable({ offer }) {
  const [url, setUrl] = useState(null);

  //get every string after underline _
  useEffect(() => {
    const longUrl = offer.recipe.uri;
    const url = longUrl.split("_")[1];
    setUrl(url);
  },[offer.recipe.uri]);

  return (
    <>
      <Slide top>
        <tr>
          <td>
            {" "}
            <Link to={`/detail/${url}`}>{offer.recipe.label}</Link>
          </td>

          <td>{parseInt(offer.recipe.calories)}</td>

          <td>{parseInt(offer.recipe.totalNutrients.FAT.quantity)}</td>

          <td>{parseInt(offer.recipe.totalNutrients.SUGAR.quantity)}</td>

          <td>{parseInt(offer.recipe.totalNutrients.PROCNT.quantity)}</td>
        </tr>
      </Slide>
    </>
  );
}

export default OfferTable;
