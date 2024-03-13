import React from "react";
import "./styles.scss";
import FooterLogo from "../../assets/images/logo/Footer/tlogo.png";
import AppDownIcon from "../../assets/images/icon/Footer/footer_sns01.png";
import BlogIcon from "../../assets/images/icon/Footer/footer_sns03.png";
import InstarIcon from "../../assets/images/icon/Footer/footer_sns04.png";
import TalkIcon from "../../assets/images/icon/Footer/footer_sns05.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer_area">
        <div className="footer_logo">
          <img src={FooterLogo} alt="footer_logo" />
          <div className="footer_icon_box">
            <ul>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.makeshop.powerapp.mhmall2023&pli=1"
                  target="_blank"
                >
                  <img src={AppDownIcon} alt="footer_logo" />
                </a>
              </li>
              <li>
                <a href="https://blog.naver.com/mhmagazine" target="_blank">
                  <img src={BlogIcon} alt="footer_logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/modernhouse_korea/"
                  target="_blank"
                >
                  <img src={InstarIcon} alt="footer_logo" />
                </a>
              </li>
              <li>
                <a href="https://pf.kakao.com/_ffNKl" target="_blank">
                  <img src={TalkIcon} alt="footer_logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="infoBox">
          <div className="info_menu_box">
            <ul>
              <li>
                <a href="">회사소개</a>
              </li>
              <li>
                <a href="">IR</a>
              </li>
              <li>
                <a href="">공지사항</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">1:1 문의</a>
              </li>
              <li>
                <a href="">대량/제휴문의</a>
              </li>
              <li>
                <a href="">이용약관</a>
              </li>
              <li>
                <a href="">개인정보처리방침</a>
              </li>
            </ul>
          </div>
          <span>
            주소 : 서울특별시 구로구 경인로 662 (디큐브시티) 14층
            <i> | </i>
            회사명 : MH&CO.l 대표이사 : 오상흔 <i> | </i> 사업자등록번호 :
            821-87-00617
            <span>
              통신판매업번호 : 2017-서울구로-1368l 개인정보책임자 : 이효영
            </span>
          </span>
          <div className="certifyInfo">
            <span>
              고객님은 안전거래를 위해 결제 시 저희 사이트에서 가입한 구매안전
              서비스를 이용하실 수 있습니다.
            </span>
            <span>
              <a href="https://partner.kcp.co.kr/escrow/popup" target="_blank">
                KCP 가입 확인
              </a>
            </span>
          </div>

          <div className="copyright">
            <span>
              copyright. 2020. modernhousemall.com. All rights reserved.
            </span>
          </div>
        </div>
        <div className="csBox">
          <h2>고객문의 대표전화</h2>
          <h1>1899-0811</h1>
          <p>
            {" "}
            AM 09:00 ~ PM 06:00
            <br />
            (주말 · 공휴일 휴무)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
