import React from "react";
import styles from "./Services.module.css";
import BlogHeader from "../SectionHeader/BlogHeader";
import ServiceCard from "./ServiceCard";
import more from "../../assets/more.svg";

const Services = ({ city }) => {
  const { services } = city;
  return (
    <div className={styles.wrapper}>
      <BlogHeader label="Recommend Services" />
      <div className={styles.container}>
        {(services || []).map((card) => (
          <div key={card.id}>
            <ServiceCard
              card={card}
            />
          </div>
        ))}
        <div className={styles.moreBtn} >
          <img src={more} alt="more-icon" className={styles.moreIcon}/>
          <p className={styles.moreText}>More</p>
        </div>
      </div>
    </div>
  );
};

export default Services;