import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaCreditCard, FaFileAlt, FaList, FaBell, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarWrapper = styled.div`
  background-color: #111;
  color: white;
  height: 90vh;
  width: ${(props) => (props.isopened ? '250px' : '60px')};
  transition: width 0.3s ease;
  padding-top: 20px;
  position: fixed;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s;
  cursor: pointer;
  
  &:hover {
    background-color: #333;
  }
`;

const StyledLink = styled(Link)`
  color: white;  /* 기본 텍스트 색상을 흰색으로 설정 */
  text-decoration: none;  /* 링크 텍스트의 기본 밑줄 제거 */
  
  &:hover {
    color: #1e90ff;  /* 호버 시 색상 변경 (선택사항) */
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: -20px;
  background-color: #333;
  color: white;
  padding: 5px;
  cursor: pointer;
  border-radius: 50%;
`;

const Sidebar = () => {
  const [isOpenValue, setIsOpenValue] = useState(true);

  const toggleSidebar = () => setIsOpenValue(!isOpenValue);

  return (
    <SidebarWrapper isopened={isOpenValue.toString()}>
      <Menu>
        <MenuItem>
          <StyledLink to="/externalCosts">
            <FaHome /> {isOpenValue && '외부의뢰비용'}
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/staticsByPeriod">
            <FaList /> {isOpenValue && '거래처별검진검수'}
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/loyalty-cards">
            <FaCreditCard /> {isOpenValue && 'Loyalty Cards'}
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/subscriptions">
            <FaFileAlt /> {isOpenValue && 'Subscriptions'}
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/debts">
            <FaFileAlt /> {isOpenValue && 'Debts'}
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/legal-info">
            <FaFileAlt /> {isOpenValue && 'Legal Information'}
          </StyledLink>
        </MenuItem>
      </Menu>
      <Footer>
        <MenuItem>
          <StyledLink to="/notifications">
            <FaBell /> {isOpenValue && 'Notifications'}
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/settings">
            <FaCog /> {isOpenValue && 'Setting'}
          </StyledLink>
        </MenuItem>
      </Footer>
    </SidebarWrapper>
  );
}

export default Sidebar;
