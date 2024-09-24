"use client";

import Image from "next/image";

import styles from "./utils/ui.module.css";

const Card = ({ image, label, description, price, key }) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.cardImageWrapper}>
          <Image
            src={image}
            alt={label}
            layout="responsive"
            width={500}
            height={300}
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      )}
      <div className={styles.cardLabelsWrapper}>
        <h4>{label}</h4>
        <div className={styles.cardHelper}>
          <p className={styles.description}>{description}</p>
          <p>$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
