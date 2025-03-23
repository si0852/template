import React from 'react';
import styled from 'styled-components';
import FilterBar from '../common/FilterBar';
import SearchButton from '../common/SearchButton';

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const YearPicker = styled.input.attrs({ type: 'date' })`
  width: 150px;
  padding: 8px;
`;

const CategorySelect = styled.select`
  width: 120px;
  padding: 8px;
`;

const Label = styled.span`
  font-weight: 500;
  min-width: 80px;
`;

const CostTableFilter = ({ year, setYear, category, setCategory, onSearch }) => {
  return (
    <FilterBar>
      <FilterGroup>
        <Label>기준년도</Label>
        <YearPicker value={year} onChange={(e) => setYear(e.target.value)} />
      </FilterGroup>
      <FilterGroup>
        <Label>건진구분</Label>
        <CategorySelect value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>전체</option>
          <option>건진</option>
          <option>일반</option>
        </CategorySelect>
      </FilterGroup>
      <SearchButton onClick={onSearch}>조회</SearchButton>
    </FilterBar>
  );
};

export default CostTableFilter;
