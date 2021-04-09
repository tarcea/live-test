import React from "react";
import BlogHeader from "../SectionHeader/BlogHeader";
import KeenSlider from "../Carousel/Carousel";

const TopVideos = ({ city }) => {
const { videos } = city;
  return (
    <div>
      {videos ? (
        <div>
          <BlogHeader label="Top Videos to see"/>
          <KeenSlider data={videos} />
        </div>
      ) : <div>Loading...</div>}
    </div>
  );
};

export default TopVideos;
