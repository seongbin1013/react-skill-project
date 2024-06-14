import React, { useState } from "react";
import { LoginBox, LoginButton, LoginInp, LoginForm } from "../../style/Style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleLoginClick = () => {
    navigate("/login ");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        userData
      );
      console.log(response.data);
      if (response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit}>
        <LoginBox>
          <div className="id">
            <div>회원가입 아이디</div>
            <LoginInp
              placeholder="아이디"
              name="id"
              value={userData.id}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <div>비밀번호</div>
            <LoginInp
              type="password"
              placeholder="비밀번호"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <div>닉네임</div>
            <LoginInp
              placeholder="닉네임"
              name="nickname"
              value={userData.nickname}
              onChange={handleChange}
            />
          </div>
          <div className="LoginButton">
            <LoginButton
              style={{ marginBottom: 10, backgroundColor: "gray" }}
              onClick={handleLoginClick}
            >
              로그인
            </LoginButton>
            <LoginButton type="submit">회원가입</LoginButton>
          </div>
        </LoginBox>
      </LoginForm>
    </>
  );
}

export default Signup;
