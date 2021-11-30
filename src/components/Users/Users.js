import React from "react";

import "./Users.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UsersDetails from "../Users/UsersDetails/UsersDetails";
import userDetails from "./fakedata";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const Users = () => {
  return (
    <div className="ui-set-up">
      <Slider {...settings}>
        {userDetails.map((userDetailsItem) => (
          <UsersDetails userDetailsShow={userDetailsItem}></UsersDetails>
        ))}
      </Slider>
    </div>
  );
};

export default Users;
