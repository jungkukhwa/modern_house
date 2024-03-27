import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../../components/Main_inner_box/styles.scss";
import WishOff from "../../assets/images/icon/Product/icon_wish.png";
import ItemBox from "../ItemBox/index";

const Main_inner_box = (props) => {
  // 10000 -> 10,000
  function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const DynamicSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const SimpleSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div className="Main_inner_box" style={props.boxStyle}>
      <h1>
        {props.headerTitle}
        {props.allShowLink ? (
          <div className="moreBtn">
            <a href={props.allShowLink}>
              전체보기 <span>></span>
            </a>
          </div>
        ) : null}
      </h1>
      {props.categoryMenu ? (
        <div className="category_menu">
          <ul>
            {props.categoryMenu.map((item, idx) => (
              <li
                key={idx}
                className={
                  props.categorymenuActive === item.name ? "active" : ""
                }
                onClick={() => {
                  props.categorymenuonChange(item.name);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="item_container">
        {/* <ul>
          {props.itemList &&
            props.itemList.map((item, idx) => (
              <li key={idx}>
                <ItemBox item={item} idx={idx} />
              </li>
            ))}
        </ul> */}

        <Slider
          {...(props.slideOption === "dynamic"
            ? DynamicSettings
            : SimpleSettings)}
        >
          {props.itemList.map((item, idx) => {
            return (
              <div key={idx}>
                <ItemBox
                  item={item}
                  idx={idx + 1}
                  {...(props.boxOption ? { boxOption: props.boxOption } : null)}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Main_inner_box;
