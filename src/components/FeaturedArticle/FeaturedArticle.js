import React from "react";
import "./style.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const FeaturedArticle = ({ title, description, img, url }) => {
  return (
    <div className="article_container">
      <div className="content_container">
        <p id="article_title">{title}</p>
        <p id="article_description">{description}</p>
        <div className="content_readmore_container">
          <button type="button" id="readmore">
            <a id="readmore" href={url}>
              READ MORE
            </a>
          </button>
          <MdKeyboardArrowRight className="content_readmore_icon" />
        </div>
      </div>
      <img src={img} alt="article" className="article_img" />
    </div>
  );
};

export default FeaturedArticle;
