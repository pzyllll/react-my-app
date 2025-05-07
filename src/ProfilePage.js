// src/ProfilePage.js
import React, { useState } from 'react';
import styled from 'styled-components';

// 样式组件
const ProfileContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff0f6;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 4px solid #ff99cc;
`;

const UserInfo = styled.div`
  text-align: center;
`;

const Label = styled.p`
  font-weight: bold;
  color: #e91e63;
  margin: 8px 0;
`;

const Value = styled.p`
  font-size: 1.1rem;
  margin: 6px 0;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff99cc;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff66b2;
    transform: scale(1.05);
  }
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ff99cc;
  border-radius: 8px;
`;

function ProfilePage() {
  const [user, setUser] = useState({
    avatar: 'https://i.pravatar.cc/150?img=1',
    username: '二次元小可爱',
    email: 'user@example.com',
    joinedAt: '2025年4月29日',
  });

  const [editing, setEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState(user.avatar);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setUser(prevState => ({ ...prevState, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => setEditing(!editing);

  const handleSave = (event) => {
    event.preventDefault();
    // Here you would normally send the updated user info to your backend.
    alert('保存成功！');
    toggleEdit();
  };

  return (
    <ProfileContainer>
      {editing ? (
        <EditForm onSubmit={handleSave}>
          <Label>修改头像</Label>
          <InputField type="file" accept="image/*" onChange={handleAvatarChange} />
          <Avatar src={previewImage} alt="用户头像" />
          <Label>昵称</Label>
          <InputField value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} />
          <Button type="submit">保存</Button>
        </EditForm>
      ) : (
        <>
          <UserInfo>
            <Avatar src={user.avatar} alt="用户头像" />
            <Label>昵称</Label>
            <Value>{user.username}</Value>

            <Label>邮箱</Label>
            <Value>{user.email}</Value>

            <Label>注册时间</Label>
            <Value>{user.joinedAt}</Value>

            <Button onClick={toggleEdit}>编辑资料</Button>
          </UserInfo>
        </>
      )}
    </ProfileContainer>
  );
}

export default ProfilePage;