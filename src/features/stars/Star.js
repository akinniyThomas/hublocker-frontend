import React, { useState } from "react";
import "./star.scss";
import StarIcon from "@material-ui/icons/StarRate";
import StarHalf from "@material-ui/icons/StarHalf";

function Star({ starsNumber }) {
  const [starCount, setStarCount] = useState(0);
  const halfStar = (starsNumber) => {
    return starsNumber % 1 !== 0;
  };
  return (
    <div className="stars">
      {starsNumber < 1 && halfStar(starsNumber) ? (
        <StarHalf className="filled" />
      ) : (
        <StarIcon
          className={starsNumber >= 1 ? "filled" : "unfilled"}
          fontSize="inherit"
        />
      )}
      {starsNumber < 2 && starsNumber > 1 && halfStar(starsNumber) ? (
        <StarHalf className="filled" />
      ) : (
        <StarIcon
          className={starsNumber >= 2 ? "filled" : "unfilled"}
          fontSize="inherit"
        />
      )}
      {starsNumber < 3 && starsNumber > 2 && halfStar(starsNumber) ? (
        <StarHalf className="filled" />
      ) : (
        <StarIcon
          className={starsNumber >= 3 ? "filled" : "unfilled"}
          fontSize="inherit"
        />
      )}
      {starsNumber < 4 && starsNumber > 3 && halfStar(starsNumber) ? (
        <StarHalf className="filled" />
      ) : (
        <StarIcon
          className={starsNumber >= 4 ? "filled" : "unfilled"}
          fontSize="inherit"
        />
      )}
      {starsNumber < 5 && starsNumber > 4 && halfStar(starsNumber) ? (
        <StarHalf className="filled" />
      ) : (
        <StarIcon
          className={starsNumber >= 5 ? "filled" : "unfilled"}
          fontSize="inherit"
        />
      )}
    </div>
  );
}

export default Star;
