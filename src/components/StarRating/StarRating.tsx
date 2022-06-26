import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./styles.module.scss";

type Rating = {
  ratingStar: number;
};

export const StarRating = ({ ratingStar }: Rating) => {
  const [rating, setRating] = useState(ratingStar);

  console.log(rating);
  return (
    <div className={styles.containerStar}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? styles.on : styles.off}
            onClick={() => setRating(index)}
          >
            <FaStar size={25} />
          </button>
        );
      })}
    </div>
  );
};
