import { useEffect, useState } from "react";
import "./../styles/rating.css";

export const Rating = ({ max, ratingItem }) => {
  const [starsCssValues, setStarsCssValues] = useState([]);

  useEffect(() => {
    if (ratingItem === undefined || ratingItem === null) {
      ratingItem.value = 0;
      ratingItem.count = 0;
    }
    setStarsCssValues(Array(max).fill(""));
  }, [max, ratingItem]);
  return (
    <div className="ratingSection">
      <span>
        {starsCssValues.map((__, index) => (
          <i
            key={index}
            className={"fas fa-star ".concat(
              ratingItem.value >= index + 1 ? "checked" : ""
            )}
          ></i>
        ))}
      </span>
      &nbsp;
      {ratingItem.value} ({ratingItem.count})
    </div>
  );
};
