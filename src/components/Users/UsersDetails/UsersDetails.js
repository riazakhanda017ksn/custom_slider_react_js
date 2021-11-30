import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYenSign, faYinYang } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
const UsersDetails = (props) => {
  const {
    name,
    cardImage,
    userName,
    userImage,
    endingIn,
    icon,
    bid,
    reactOnBid,
    reactWhiteDot,
    buttonText,
    borderColor,
    endingInBg,
    id,
  } = props.userDetailsShow;

  const history = useHistory();
  const handleClick = (id) => {
    const url = `userDetails/${id}`;
    history.push(url);
  };

  return (
    <div className="card-main-container">
      <div
        className="endingTimeText"
        style={{
          background: `url(${cardImage})no-repeat`,
          height: "45vh",
          backgroundPosition: "center",
          overflow: "hidden",
          backgroundSize: "cover",
          borderRadius: "23px 23px 0px 0px",
        }}
      >
        <p style={{ background: `${endingInBg}` }}>
          <span>{endingIn && `Ending In : ${endingIn}`}</span>
        </p>
      </div>
      <h3>{name}</h3>
      <div className="user-little-profile">
        <div className="username-and-img">
          {" "}
          <img src={userImage} alt="" />
          <span>@{userName}</span>
        </div>
        <div className="icon">
          <small>
            <span>
              <FontAwesomeIcon icon={faYenSign} />
            </span>
          </small>
        </div>
      </div>
      <div className="user-expression-about-buy-or-bid-container ">
        <h5> {bid}</h5>
        <button onClick={() => handleClick(id)}>{buttonText}</button>
      </div>
      <div className="user-react-container">
        <p>
          <span>{icon} </span> <small>{reactOnBid}</small>
        </p>
        <p>
          <span className="dot"></span>
          <code>21</code>
        </p>
      </div>
    </div>
  );
};

export default UsersDetails;
