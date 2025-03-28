import React, { useRef, useState } from 'react';
import CostTable from './CostTable';
import styled from 'styled-components';
import PageTitle from '../../../common/PageTitle';
import RealGrid from './RealGrid/RealGrid';
import CostTableFilter from './CostTableFilter';

const PageWrapper = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const ContentArea = styled.div`
  margin-top: 24px;
`;

const CostTablePage = () => {
  const [year, setYear] = useState(Date.now());
  const [category, setCategory] = useState('전체');
  const handleSearch = () => {
  };

  const gridRef = useRef(null);

  return (
    <PageWrapper>
      <PageTitle>외부의뢰 비용</PageTitle>
      <CostTableFilter
        year={year} 
        setYear={setYear} 
        category={category} 
        setCategory={setCategory} 
        onSearch={handleSearch} 
      />

      <ContentArea>
        <RealGrid/>
        {/* <CostTable /> */}
      </ContentArea>
    </PageWrapper>
  );
};

export default CostTablePage;
