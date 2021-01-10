import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
//Component for receiving the response to display it on the screen
class Box extends React.Component {
  renderList() {
    //Helper function to map the response array
    let arr = this.props.result;
    if (arr.length > 0) {
      return arr.map((post) => {
        return (
          <div className="card">
            <div className="content">
              <img src={post.thumbnail} alt="img"></img>
              <h4>{post.title}</h4>
              <p>{post.ingredients}</p>
              <a href={post.href}>Full Recipe Here!</a>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="recipeSearch">
        <div className="recipe-max-width">
          <h2>Find your favourite recipe here!</h2>
          <div className="carousel">
            <Slider {...settings}>{this.renderList()}</Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
