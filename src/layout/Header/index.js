import React, { useEffect, useState } from "react";
import "./styles.scss";
import SearchBar from "../../components/SearchBar";

import Logo from "../../assets/images/logo/Header/tlogo.png";
import Login from "../../assets/images/icon/Header/icon_login_.png";
import Join from "../../assets/images/icon/Header/icon_join_.png";
import Cart from "../../assets/images/icon/Header/icon_cart.png";
import Call from "../../assets/images/icon/Header/icon_call.png";
import MainData from "../../data/Category/Main/data.json";

const Header = () => {
  const [search, setSearch] = useState("");
  const [mainCategory, setMainCategory] = useState([]);
  const [mainCategory_depth01, setMainCategoryDepth01] = useState([]);
  const [mainCategory_depth02, setMainCategoryDepth02] = useState([]);
  const [activeMenuCateID, setActiveMenuCateID] = useState(null);
  const [active_Depth01_CateID, setActiveDepth01CateID] = useState("");
  const [active_Depth02_CateID, setActiveDepth02CateID] = useState("");
  const [depth02Show, setDepth02Show] = useState(false);
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

  useEffect(() => {
    // JSON 파일에서 데이터를 가져와서 state에 설정
    setMainCategory(MainData.main_category);
  }, []);

  useEffect(() => {
    // JSON 파일에서 데이터를 가져와서 state에 설정
    if (activeMenuCateID !== null) {
      const targetObject = mainCategory.find(
        (item) => item.id === activeMenuCateID
      );

      if (targetObject) {
        const subDepthArray = targetObject.sub_depth_01;
        setMainCategoryDepth01(subDepthArray);
      } else {
        setMainCategoryDepth01([]);
      }
    }

    if (active_Depth01_CateID !== "") {
      setActiveDepth01CateID("");
    }

    if (active_Depth02_CateID !== "") {
      setActiveDepth02CateID("");
    }
  }, [activeMenuCateID]);

  useEffect(() => {
    // JSON 파일에서 데이터를 가져와서 state에 설정
    if (active_Depth01_CateID !== "") {
      const targetObject = mainCategory_depth01.find(
        (item) => item.id === active_Depth01_CateID
      );

      if (targetObject) {
        const subDepthArray = targetObject.sub_depth_02;
        if (subDepthArray) {
          setMainCategoryDepth02(subDepthArray);
          setDepth02Show(true);
        } else {
          setMainCategoryDepth02([]);
          setDepth02Show(false);
        }
      } else {
        setMainCategoryDepth02([]);
        setDepth02Show(false);
      }
    }
    if (active_Depth02_CateID !== "") {
      setActiveDepth02CateID("");
    }
  }, [active_Depth01_CateID]);

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
        <div className="header_bottom_area">
          <div className="category_container">
            <div className="category_btn">
              <i></i>
              <span>카테고리</span>
            </div>
            <div className="category_box">
              <div className="category_menu">
                <ul
                // onMouseOut={() => {
                //   setActiveMenuCateID(null);
                //   setActiveDepth01CateID("");
                //   setActiveDepth02CateID("");
                // }}
                >
                  {mainCategory.map((item) => (
                    <li
                      key={item.id}
                      className={activeMenuCateID === item.id ? "active" : ""}
                      onMouseOver={() => {
                        setActiveMenuCateID(item.id);
                      }}
                    >
                      <a>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="category_sub_menu_depth1">
                <ul
                  onMouseOut={() => {
                    if (!depth02Show) {
                      setActiveDepth01CateID("");
                    }
                    setActiveDepth02CateID("");
                  }}
                >
                  {mainCategory_depth01.map((item) => (
                    <li
                      key={item.id}
                      className={
                        active_Depth01_CateID === item.id ? "active" : ""
                      }
                      onMouseOver={() => {
                        setActiveDepth01CateID(item.id);
                      }}
                    >
                      <a>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="category_sub_menu_depth2"
                style={
                  mainCategory_depth02.length === 0 ||
                  active_Depth01_CateID === ""
                    ? { display: "none" }
                    : {}
                }
                onMouseOut={() => {
                  setActiveDepth02CateID("");
                }}
              >
                <ul>
                  {mainCategory_depth02.map((item) => (
                    <li
                      key={item.id}
                      className={
                        active_Depth02_CateID === item.id ? "active" : ""
                      }
                      onMouseOver={() => {
                        setActiveDepth02CateID(item.id);
                        setDepth02Show(false);
                      }}
                    >
                      <a>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="main_menu_container">
            <ul>
              <li className="active">
                <a>당일출고</a>
              </li>
              <li className="active">
                <a>베스트</a>
              </li>
              <li>
                <a>신상품</a>
              </li>
              <li>
                <a>SALE</a>
              </li>
              <li>
                <a>쿠폰존</a>
              </li>
              <li>
                <a>기획전</a>
              </li>
              <li>
                <a>이벤트</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
