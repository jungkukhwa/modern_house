import React from "react";
import { Link } from "react-router-dom";
import "../ItemBox/styles.scss";
import WishOff from "../../assets/images/icon/Product/icon_wish.png";

const ItemBox = (props) => {
  // 10000 -> 10,000
  function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div
      className={props.boxOption === "circle" ? "item_box" : "item_box square"}
    >
      <Link to="">
        <div className="item_img_box">
          {props.idx ? (
            <span className="item_number">
              {props.idx
                ? JSON.stringify(props.idx).replace(/^(\d)$/, "0$1")
                : null}
            </span>
          ) : null}
          <img src={props.item.thumb_img[0].thumb1} />
        </div>
        <div className="item_info_box">
          <p>{props.item.name}</p>

          {props.item.discount !== 0 ? (
            <div className="item_price_box">
              <div className="discount_price_box">
                <span className="discount">{props.item.discount}%</span>
                <span className="sellprice">
                  {addCommas(props.item.sellprice)}원
                </span>
                <strike className="price_sale_on">
                  {addCommas(props.item.price)}원
                </strike>
              </div>

              <span>
                <img src={WishOff} alt="wish_off" />
              </span>
            </div>
          ) : (
            <div className="item_price_box">
              <span className="price_sale_off">
                {addCommas(props.item.price)}원
              </span>
              <span>
                <img src={WishOff} alt="wish_off" />
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ItemBox;
