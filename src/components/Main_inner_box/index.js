import React from "react";
import { Link } from "react-router-dom";
import "../../components/Main_inner_box/styles.scss";
import WishOff from "../../assets/images/icon/Product/icon_wish.png";
import ItemBox from "../ItemBox/index";

const Main_inner_box = (props) => {
  // 10000 -> 10,000
  function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
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
        <ul>
          {props.itemList &&
            props.itemList.map((item, idx) => (
              <li key={idx}>
                <ItemBox item={item} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Main_inner_box;
