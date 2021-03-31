import React, { Fragment } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import {Link} from "react-router-dom";
import {SearchCity} from "../SearchCity/SearchCity";

const SHeader = ({ city, cityName }) => {
const { bannerImg, title, subtitle, placeOne, placeTwo, placeThree } = city;
  return (
    <>
      <section
        className="section_header"
        id="section_header"
        style={{backgroundImage: `url(${bannerImg})`}}
      >
        <div
          className="city_header_url"
        >
          <Link to="/">
            <p>Landing Page</p>
          </Link>
          <AiFillCaretRight className="city_header_url_icon" />
          <p>{cityName}</p>
        </div>
        <div className="headers">
          <p style={{...title}.style}>{{...title}.content}</p>
          <p style={{...subtitle}.style}>{{...subtitle}.content}</p>
        </div>
        <SearchCity />
        <div>
          <div id="header_suggestion" className="places">
            Maybe{" "}
            <a
              style={{color: {...placeOne}.color}}
              href={{...placeOne}.link}
              target="_new"
            >
              {{...placeOne}.text}
            </a>
            {", "}
            <a
              style={{color: {...placeTwo}.color}}
              href={{...placeTwo}.link}
              target="_new"
            >
              {{...placeTwo}.text}
            </a>
            {" or "}
            <a
              style={{color: {...placeThree}.color}}
              href={{...placeThree}.link}
              target="_new"
            >
              {{...placeThree}.text}
            </a>
            {" ?"}
          </div>
        </div>
      </section>
    </>
  );
};

export default SHeader;