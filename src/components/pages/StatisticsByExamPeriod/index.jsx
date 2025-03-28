import React, { useState }  from 'react';
import styled from 'styled-components';
import PageTitle from '../../../common/PageTitle';
import FilterBar from "../../../common/FilterBar";
import Label from "../../../common/Label";
import YearPicker from "../../../common/YearPicker";
import CategorySelect from "../../../common/CategorySelect";
import FilterItem from '../../../common/FilterItem';
import RealGrid from './RealGrid/RealGrid';
import SearchButton from '../../../common/SearchButton';


const PageWrapper = styled.div`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const ContentArea = styled.div`
  margin-top: 24px;
`;


const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatisticsByExamPeriod = () => {
  const [year, setYear] = useState(Date.now());
  const [category, setCategory] = useState('전체');
  const categoryOptions = ['전체', '예건', '종건']; 
  const handleSearch = () => {
    console.log('조회', year, category);
  };

  const checkListText = [
    "특검(8)1차","특검(8)2차",
     "배치(C)1차", "배치(C)2차",
      "기타(E)1차", "기타(E)2차", "임시(D)1차",
       "임시(D)2차", "채용 1차", "채용 2차", "패키지"
  ]

  return(

    <PageWrapper>
      <PageTitle>검진기간별 통계</PageTitle>
      <FilterBar mb="20px">
        <FilterGroup>
          <Label>검진기간</Label>
          <YearPicker value={year} onChange={(e) => setYear(e.target.value)} />
        </FilterGroup>
        <FilterGroup>
          <Label mw='15px'>-</Label>
          <YearPicker value={year} onChange={(e) => setYear(e.target.value)} /> 
        </FilterGroup>
        <FilterGroup>
          <Label>건진장소</Label>
          <CategorySelect 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            options={categoryOptions} 
          />
          <CategorySelect 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            options={categoryOptions} 
          />
        </FilterGroup>
        <SearchButton onClick={handleSearch}>조회</SearchButton>
      </FilterBar>
      <FilterBar>
        <Label>검진종류</Label>
        <FilterItem label="전체" id="check1" />
        {
          checkListText.map((text, index) => (
          <FilterItem label={text} id={`check`+index} />
          ))
        }
        {/* <FilterItem label="특검(8)1차" id="check2" />
        <FilterItem label="특검(8)2차" id="check3" />
        <FilterItem label="배치(C)1차" id="check4" />
        <FilterItem label="배치(C)2차" id="check5" />
        <FilterItem label="기타(E)1차" id="check6" />
        <FilterItem label="기타(E)2차" id="check7" />
        <FilterItem label="임시(D)1차" id="check8" />
        <FilterItem label="임시(D)2차" id="check9" />
        <FilterItem label="채용 1차" id="check10" />
        <FilterItem label="채용 2차" id="chec11" />
        <FilterItem label="패키지" id="check12" /> */}
        
      </FilterBar>
     
      <ContentArea>
        <RealGrid/>
        {/* <CostTable /> */}
      </ContentArea>
    </PageWrapper>
  )
}

export default StatisticsByExamPeriod;