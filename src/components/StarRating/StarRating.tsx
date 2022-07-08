import { IconButton } from "@mui/material";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./styles.module.scss";

type Rating = {
  ratingStar: number;
};

export const StarRating = ({ ratingStar }: Rating) => {
  const [rating, setRating] = useState(ratingStar);

  return (
    <div className={styles.containerStar}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <IconButton
            type="button"
            key={index}
            className={index <= rating ? styles.on : styles.off}
            onClick={() => setRating(index)}
          >
            <FaStar size={25} />
          </IconButton>
        );
      })}
    </div>
  );
};
