import React from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: white;
  padding: 20px 40px;  /* 헤더 높이를 늘리기 위해 padding 조정 */
  height: 60px;  /* 헤더의 기본 높이를 지정 */

  @media (max-width: 768px) {  /* 모바일 화면에서는 높이를 조정할 수 있음 */
    padding: 15px 20px;
    height: 40px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #61dafb;
`;

const LogoIcon = styled(FaReact)`
  font-size: 30px;
  margin-right: 10px;

  @media (max-width: 768px) {  /* 모바일 화면에서 아이콘 크기 줄이기 */
    font-size: 25px;
  }
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {  /* 모바일 화면에서 텍스트 크기 줄이기 */
    font-size: 18px;
  }
`;

const LogoutButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }

  @media (max-width: 768px) {  /* 모바일 화면에서 버튼 크기 줄이기 */
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoIcon />
        <LogoText>건진통계</LogoText>
      </LogoContainer>
      <LogoutButton>LOGOUT</LogoutButton>
    </HeaderContainer>
  );
}

export default Header;
