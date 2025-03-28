import React from 'react';
import styled from 'styled-components';
import FilterBar from '../../../common/FilterBar';
import SearchButton from '../../../common/SearchButton';
import Label from '../../../common/Label';
import YearPicker from '../../../common/YearPicker';
import CategorySelect from '../../../common/CategorySelect';

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;


const CostTableFilter = ({ year, setYear, category, setCategory, onSearch }) => {
  const categoryOptions = ['전체', '건진', '일반'];

  return (
    <FilterBar>
      <FilterGroup>
        <Label>기준년도</Label>
        <YearPicker value={year} onChange={(e) => setYear(e.target.value)} />
      </FilterGroup>
      <FilterGroup>
        <Label>건진구분</Label>
        <CategorySelect 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          options={categoryOptions} 
        />
      </FilterGroup>
      <SearchButton onClick={onSearch}>조회</SearchButton>
    </FilterBar>
  );
};

export default CostTableFilter;
