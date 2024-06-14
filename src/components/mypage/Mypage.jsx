import React, { useState } from "react";
import { DetailContainer, MypageBox } from "../../style/Style";
import Layout from "../../shared/Layout";
import axios from "axios";

function Mypage({ user, setUser }) {
  const [nickname, setNickname] = useState(user ? user.nickname : "유저없음");
  const [userPic, setUserPic] = useState(null);

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setUserPic(file);
  };

  const handleProfileUpdate = async (e) => {
    try {
      const formData = new FormData();
      // avatar와 nickname 중 하나 또느 모두 변경 가능
      formData.append("avatar", userPic);
      formData.append("nickname", nickname);

      // 요청 시 Content-Type에 유의
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.patch(
        `https://moneyfulpublicpolicy.co.kr/profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      setUser({
        ...user,
        avatar: response.data.avatar,
        nickname: response.data.nickname,
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <>
      <DetailContainer>
        <MypageBox>
          <div>프로필 수정 닉네임</div>
          <input
            className="profile"
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={handleNickname}
          />
          <div>아바타 이미지</div>
          <input type="file" onChange={handleFileChange} />
          <button className="update" onClick={handleProfileUpdate}>
            프로필 업데이트
          </button>
        </MypageBox>
      </DetailContainer>
    </>
  );
}

export default Mypage;
