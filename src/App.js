import RealGrid from 'realgrid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import CostTablePage from './components/pages/ExternalCosts/CostTablePage';
import Sidebar from './common/Sidebar/Sidebar';
import Header from './common/Header/Header';
import StatisticsByExamPeriod from './components/pages/StatisticsByExamPeriod';
import PersonnelStatus65 from './components/pages/PersonnelStatus65';



const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  margin-left: 250px;  /* 사이드바의 크기 */
  padding: 20px;
  width: 100%;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header/>
        <MainContent>
          <Sidebar/>
          <ContentWrapper>
            <Routes>
              {/* 각 Route를 설정 */}
              <Route exact path="/externalCosts" element={<CostTablePage/>} /> 
              <Route exact path="/staticsByPeriod" element={<StatisticsByExamPeriod/>} /> 
              <Route exact path="/personnelstatus" element={<PersonnelStatus65/>} /> 
            </Routes>
            {/* <CostTablePage /> */}
          </ContentWrapper>
        </MainContent>
    </AppContainer>
    </Router>
  );
}

export default App;
