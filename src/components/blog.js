import React from "react";
import img1 from "../assets/food-img.jpg";
import img2 from "../assets/food-default.jpg";

//Component for display on screen
const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-max-width">
        <h2>Latest Posts</h2>
        <div className="images">
          <img src={img1} alt="Food Blog"></img>
          <img src={img2} alt="Food Blog"></img>
        </div>
      </div>
    </div>
  );
};
export default Blog;
