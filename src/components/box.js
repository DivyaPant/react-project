import React from "react";
//import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
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
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              deviceType="desktop"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {" "}
              <></>
              {this.renderList()}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;

/*
<Carousel
              centerMode={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
            >
              {this.renderList()}
            </Carousel> */
