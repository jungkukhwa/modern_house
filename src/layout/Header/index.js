import React, { useEffect, useState } from "react";
import "./styles.scss";
import SearchBar from "../../components/SearchBar";

import Logo from "../../assets/images/logo/Header/tlogo.png";
import Login from "../../assets/images/icon/Header/icon_login_.png";
import Join from "../../assets/images/icon/Header/icon_join_.png";
import Cart from "../../assets/images/icon/Header/icon_cart.png";
import Call from "../../assets/images/icon/Header/icon_call.png";

const Header = () => {
  const [search, setSearch] = useState("");
  //searchHandle
  const searchHandle = (e) => {
    setSearch(e.target.value);
  };

  const searchonClick = (e) => {
    e.preventDefault();
  };

  //searchSubmit 엔터키로 검색 실행
  const searchSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div id="header">
      <div className="header_area">
        <div className="header_top_area">
          <div className="header_logo">
            <img src={Logo} alt="header_logo" />
          </div>
          <div className="header_link">
            <ul>
              <li>
                <a className="active">모던몰</a>
              </li>
              <li>
                <a>버터샵</a>
              </li>
            </ul>
          </div>
          <div className="search_bar">
            <SearchBar
              value={search}
              onChange={searchHandle}
              onKeypress={searchSubmit}
              onClick={searchonClick}
            />
          </div>
          <div className="header_icon_menu">
            <ul>
              <li>
                <a>
                  <img src={Login} alt="로그인" />
                  <span>로그인</span>
                </a>
              </li>
              <li>
                <a>
                  <img src={Join} alt="회원가입" />
                  <span>회원가입</span>
                </a>
              </li>
              <li>
                <a>
                  <img src={Cart} alt="장바구니" />
                  <span>장바구니</span>
                </a>
              </li>
              <li>
                <a>
                  <img src={Call} alt="고객센터" />
                  <span>고객센터</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header_bottom_area"></div>
      </div>
    </div>
  );
};

export default Header;
