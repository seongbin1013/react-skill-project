import React, { useEffect } from "react";
import { HeaderBar } from "../style/Style";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Layout({ user }) {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user || !user.nickname) {
  //     // navigate("/login");
  //   }
  // }, []);

  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    alert("로그아웃 되었습니다");
    navigate("/login");
  };
  return (
    <>
      <HeaderBar>
        <div className="leftSide">
          <Link to="/ui" className="home">
            HOME
          </Link>
          <Link to="/mypage" style={{ textDecoration: "none" }}>
            내 프로필
          </Link>
        </div>
        <div className="profileBox">
          <img src={user.avatar} alt="이미지" className="profilePic" />
          <label className="correctionBox" htmlFor="profile">
            <input
              id="profile"
              style={{ display: "none" }}
              type="file"
              accept="image/*"
            />
          </label>
          <div>{user?.nickname}</div>
        </div>
        <button className="logout" onClick={handleLogout}>
          로그아웃
        </button>
      </HeaderBar>
      <Outlet />
    </>
  );
}

export default Layout;
