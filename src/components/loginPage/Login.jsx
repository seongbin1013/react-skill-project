import React, { useState } from "react";
import { LoginBox, LoginButton, LoginInp, LoginForm } from "../../style/Style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    id: "",
    password: "",
  });

  const handleSingupClick = () => {
    navigate("/signup");
  };

  const handleHomeClick = () => {
    navigate("/ui");
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
        "https://moneyfulpublicpolicy.co.kr/login",
        userData
      );
      console.log(response.data);
      alert(`${response.data.nickname} 님 반갑습니다!`);
      localStorage.setItem("accessToken", response.data.accessToken);
      setUser(response.data);
      handleHomeClick();
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
            <div>로그인 아이디</div>
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
              placeholder="비밀번호"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div className="LoginButton">
            <LoginButton
              style={{ marginBottom: 10, backgroundColor: "gray" }}
              onSubmit={handleHomeClick}
            >
              로그인
            </LoginButton>
            <LoginButton onClick={handleSingupClick}>회원가입</LoginButton>
          </div>
        </LoginBox>
      </LoginForm>
    </>
  );
}

export default Login;
