import React, { useState }  from 'react';
import styled from 'styled-components';
import PageTitle from '../../../common/PageTitle';
import FilterBar from "../../../common/FilterBar";
import Label from "../../../common/Label";
import YearPicker from "../../../common/YearPicker";
import CategorySelect from "../../../common/CategorySelect";
import FilterItem from '../../../common/FilterItem';
import SearchButton from '../../../common/SearchButton';
import InputBox from '../../../common/InputBox';
import SelectBox from '../../../common/SelectBox';
import MultiSelectDropdown from '../../../common/MultiSelectDropDown';
import DatePicker from '../../../common/DatePicker';
import RadioGroup from '../../../common/RadioGroup';


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

const PersonnelStatus65 = () => {
  const [year, setYear] = useState(Date.now());
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
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
      
      <FilterBar marginBottom="12px">
  <Label>대상기간</Label>
  <DatePicker value={startDate} onChange={(e) => setStartDate(e.target.value)} />
  <Label>-</Label>
  <DatePicker value={endDate} onChange={(e) => setEndDate(e.target.value)} />

  <Label>건진구분</Label>
  <SelectBox value="예건" onChange={() => {}} options={[{ label: '예건', value: '예건' }, { label: '종건', value: '종건' }]} />

  <Label>건진장소</Label>
  <SelectBox value="1팀" onChange={() => {}} options={[{ label: '1팀', value: '1팀' }]} />

  <RadioGroup
    name="visitType"
    label="예약구분"
    value="예약"
    onChange={() => {}}
    options={[{ label: '예약', value: '예약' }, { label: '접수', value: '접수' }, { label: '전체', value: '전체' }]}
  />

  <SearchButton onClick={() => console.log('조회')}>조회</SearchButton>
</FilterBar>

<FilterBar>
  <Label>거래처마스터</Label>
  <InputBox value="" onChange={() => {}} placeholder="거래처코드" />

  <Label>담당자</Label>
  <InputBox value="" onChange={() => {}} placeholder="영업담당자" />
  <InputBox value="" onChange={() => {}} placeholder="예약담당자" />

  <Label>성별</Label>
  <SelectBox value="전체" onChange={() => {}} options={[{ label: '전체', value: '전체' }, { label: '남', value: '남' }]} />

  <FilterItem label="일반+특검" id="check1" />
  <FilterItem label="순수건진" id="check2" />

  <Label>상세조회</Label>
  <MultiSelectDropdown value={[]} onChange={() => {}} />
</FilterBar>
    </PageWrapper>
  )
}

export default PersonnelStatus65;