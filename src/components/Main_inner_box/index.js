import React from "react";
import "../../components/Main_inner_box/styles.scss";

const Main_inner_box = (props) => {
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
      <div className="item_container"></div>
    </div>
  );
};

export default Main_inner_box;
