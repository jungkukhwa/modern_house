import React, { useState } from "react";
import "../SignIn/styles.scss";
import SocialKakao from "./SocialKakao";

const SignIn = () => {
  const [active, setActive] = useState(1);
  return (
    <div id="loginWrap">
      <div className="title">
        <h2>LOGIN</h2>
        <p>로그인</p>
      </div>
      <div className="login_tab">
        <div className="tab_title">
          <ul>
            <li
              className={active === 1 ? "active" : ""}
              onClick={() => {
                setActive(1);
              }}
            >
              회원 로그인
            </li>
            <li
              className={active === 0 ? "active" : ""}
              onClick={() => {
                setActive(0);
              }}
            >
              비회원 주문 조회
            </li>
          </ul>
        </div>
        <div className="tab_container">
          {/* 로그인 시작*/}
          <div className="tab_content">
            <div className="login_form">
              <form onSubmit={() => {}}>
                <input type="text" placeholder="아이디" />
                <input type="text" placeholder="비밀번호" />
                <div className="save_id">
                  <label>
                    아이디 저장
                    <input type="checkbox" />
                  </label>
                </div>
                <button className="login_btn" onClick={() => {}}>
                  로그인
                </button>
              </form>
            </div>
            <div className="sign_box">
              <ul>
                <li>아이디 찾기</li>
                <li>비밀번호 찾기</li>
                <li>회원가입</li>
              </ul>
            </div>
            <div className="sns_login">
              <p>SNS 간편 로그인</p>
              <div className="sns_box"></div>
            </div>
          </div>
          {/* 로그인 끝*/}
          {/* 비회원 주문 조회 시작 */}
          <div className="tab_content">
            <SocialKakao />
          </div>
          {/* 비회원 주문 조회 끝 */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
