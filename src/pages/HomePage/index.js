import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../HomePage/styles.scss";

import MainSwiper from "../../components/Swiper";
import MainInnerBox from "../../components/Main_inner_box/index";

import MainBestData from "../../data/MainBestData/data.json";
import Products from "../../data/Product/data.json";

import Banner01 from "../../assets/images/main_banner/신규가입.jpg";
import Banner02 from "../../assets/images/main_banner/패브릭가구랭킹.jpg";

const HomePage = () => {
  const [swiperData, setSwiperData] = useState([]);
  const [mainCateList, setMainCateList] = useState([]);

  // Main 지금 뜨고 있는 베스트
  const [categorymenuActive, setCategorymenuActive] = useState("전체");
  const [categoryitems, setCategoryitems] = useState([]);

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

  // 지금 뜨고 있는 베스트
  useEffect(() => {
    // 배열에서 name이 "a"인 객체를 찾음
    const foundObject = MainBestData.menu_category.find(
      (obj) => obj.name === categorymenuActive
    );

    // 해당 객체가 존재하고 itemList 배열이 있다면 추출
    const itemsArray = foundObject ? foundObject.itemList : [];

    // itemsArray 있는 숫자와 product 배열의 id가 일치하는 항목들을 모두 추출
    const matchedItems = Products.Product.filter((item) =>
      itemsArray.includes(item.id)
    );

    setCategoryitems(matchedItems);

    // 카테고리 메뉴 바뀔 때마다 item list 변경
  }, [categorymenuActive]);

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
        {/* main 지금 뜨고 있는 베스트 시작*/}
        {/* https://react-slick.neostack.com/docs/example/dynamic-slides */}
        <div className="main_best_wrap">
          <MainInnerBox
            headerTitle="지금 뜨고 있는 베스트"
            allShowLink="/"
            categoryMenu={MainBestData.menu_category}
            categorymenuActive={categorymenuActive}
            categorymenuonChange={setCategorymenuActive}
            itemList={categoryitems}
            slideOption="dynamic"
            boxOption="circle"
          />
        </div>
        {/* main 지금 뜨고 있는 베스트 끝*/}
        {/* main 고객님을 위한 맞춤 PICK! 시작 */}
        {/* https://react-slick.neostack.com/docs/example/dynamic-slides */}
        <div className="main_pick_wrap">
          <MainInnerBox
            headerTitle="고객님을 위한 맞춤 PICK!"
            categorymenuonChange={setCategorymenuActive}
            itemList={categoryitems}
            slideOption="dynamic"
            boxOption="square"
          />
        </div>
        {/* main 고객님을 위한 맞춤 PICK! 끝 */}
        {/* 따끈따끈한 신상품 시작 */}
        {/* https://react-slick.neostack.com/docs/example/simple-slider */}
        <div className="main_new_wrap">
          <MainInnerBox
            boxStyle={{ color: "#fff" }}
            headerTitle="따끈따끈한 신상품"
            allShowLink="/"
            categorymenuonChange={setCategorymenuActive}
            itemList={categoryitems}
            slideOption="simple"
          />
        </div>
        {/* 따끈따끈한 신상품 끝 */}
      </div>
    </div>
  );
};

export default HomePage;
