import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../HomePage/styles.scss";

import MainSwiper from "../../components/Swiper";
import MainInnerBox from "../../components/Main_inner_box/index";

import MainBestData from "../../data/MainBestData/data.json";

import Banner01 from "../../assets/images/main_banner/신규가입.jpg";
import Banner02 from "../../assets/images/main_banner/패브릭가구랭킹.jpg";

const HomePage = () => {
  const [swiperData, setSwiperData] = useState([]);
  const [mainCateList, setMainCateList] = useState([]);

  // Main 지금 뜨고 있는 베스트
  const [categorymenuActive, setCategorymenuActive] = useState("전체");

  useEffect(() => {
    //Main Swiper에 넘겨줄 slide data 정보
    const main_swiper_data = [
      {
        id: 1,
        title: "Image 1",
        link: "/",
      },
      {
        id: 2,
        title: "Image 2",
        link: "/",
      },
      {
        id: 3,
        title: "Image 3",
        link: "/",
      },
      {
        id: 4,
        title: "Image 4",
        link: "/",
      },
      {
        id: 5,
        title: "Image 5",
        link: "/",
      },
      {
        id: 6,
        title: "Image 6",
        link: "/",
      },
    ];
    setSwiperData(main_swiper_data);
    // main category data

    const main_cate_list = [
      {
        id: 1,
        name: "주방",
        image: require("../../assets/images/main_category_menu/주방.png"),
        link: "/",
      },
      {
        id: 2,
        name: "패브릭",
        image: require("../../assets/images/main_category_menu/패브릭.png"),
        link: "/",
      },
      {
        id: 3,
        name: "가구",
        image: require("../../assets/images/main_category_menu/가구.png"),
        link: "/",
      },
      {
        id: 4,
        name: "키즈",
        image: require("../../assets/images/main_category_menu/키즈.png"),
        link: "/",
      },
      {
        id: 5,
        name: "린넨앤키친",
        image: require("../../assets/images/main_category_menu/린넨앤키친.png"),
        link: "/",
      },
      {
        id: 6,
        name: "욕실・생활",
        image: require("../../assets/images/main_category_menu/욕실생활.png"),
        link: "/",
      },
      {
        id: 7,
        name: "홈데코",
        image: require("../../assets/images/main_category_menu/홈데코.png"),
        link: "/",
      },
      {
        id: 8,
        name: "수납・정리",
        image: require("../../assets/images/main_category_menu/수납정리.png"),
        link: "/",
      },
      {
        id: 9,
        name: "가전・라이프",
        image: require("../../assets/images/main_category_menu/가전라이프.png"),
        link: "/",
      },
      {
        id: 10,
        name: "펫본",
        image: require("../../assets/images/main_category_menu/펫본.png"),
        link: "/",
      },
    ];
    setMainCateList(main_cate_list);
  }, []);

  return (
    <div id="Home_page">
      <MainSwiper data={swiperData} />
      <div className="home_page_container">
        {/* main category menu 시작*/}
        <div className="main_cate_wrap">
          <ul>
            {mainCateList.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* main category menu 끝*/}
        {/* main banner 시작 */}
        <div className="main_banner_wrap">
          <Link to="/">
            <img src={Banner01} alt="신규가입" />
          </Link>
          <Link to="/">
            <img src={Banner02} alt="패브릭&가구 베스트 랭킹" />
          </Link>
        </div>
        {/* main banner 끝 */}
        {/* main 지금 뜨고 있는 베스트*/}
        <MainInnerBox
          headerTitle="지금 뜨고 있는 베스트"
          allShowLink="/"
          categoryMenu={MainBestData.menu_category}
          categorymenuActive={categorymenuActive}
          categorymenuonChange={setCategorymenuActive}
        />
      </div>
    </div>
  );
};

export default HomePage;
