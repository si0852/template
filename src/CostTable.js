import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
`

const PageTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  border-bottom: 2px solid #333;
  padding-bottom: 8px;
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 24px;
  border: 1px solid #ddd;
   border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;


const TableWrapper = styled.div`
  overflow-x: auto;
  border: 1px solid #ddd;
`;

const TableContainer = styled.div`
   border: 2px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: none;
   overflow-x: auto;
  box-sizing: border-box;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;   

  th, td {
    border: 1px solid #ddd;
    font-size:12px;
    padding: 8px;
    text-align: center;
    word-break: break-word; 
    white-space: normal;
  }

th:nth-child(1),  /* No */
td:nth-child(1) {
  width: 20px;
}

th:nth-child(2),  /* 검사코드 */
td:nth-child(2) {
  width: 60px;
}

th:nth-child(3),  /* 검사명 */
td:nth-child(3) {
  width: 70px;
}

th:nth-child(4),  /* 검사수가 */
td:nth-child(4) {
  width: 50px;
}

th:nth-child(5),  /* 구분 */
td:nth-child(5) {
  width: 60px;
}

th:nth-child(6),  /* 합계(전체) */
td:nth-child(6){
  width: 150px;
},

  tfoot td {
    font-weight: bold;
    background-color: #f9f9f9;
  }
`;

const YearPicker = styled.input.attrs({ type: 'date' })`
  width: 150px;
  padding: 8px;
`;

const Divider = styled.div`
  width: 2px;
  height: 40px;
  background-color: #ccc;
`;

const CategorySelect = styled.select`
  width: 120px;
  padding: 8px;
`;

const ContentArea = styled.div`
  margin-top: 24px;
  width: 100%;
  box-sizing: border-box;
`;

const SearchButton = styled.button`
  margin-left: auto;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Label = styled.span`
  font-weight: 500;
  min-width: 80px;
`;


const data = [
    {
      code: 'GS144',
      name: '오줌 NMF',
      price: 8920,
      rows: [
        { type: '검사건수', total: 106, 예건: 70, 중건: 36 },
        { type: '검사비용', total: 945520, 예건: 624400, 중건: 321120 }
      ]
    },
    {
      code: 'GC275',
      name: '오줌 NMAC',
      price: 8880,
      rows: [
        { type: '검사건수', total: 55, 예건: 32, 중건: 23 },
        { type: '검사비용', total: 488400, 예건: 284160, 중건: 204240 }
      ]
    }
  ];
  
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

const CostTable = () => {
    return(
        <PageWrapper>
    <PageTitle>외부의뢰 비용</PageTitle>
          <FilterBar>
          <FilterGroup>
            <Label>기준년도</Label>
            <YearPicker />
          </FilterGroup>
          <Divider/>
          <FilterGroup>
            <Label>건진구분</Label>
            <CategorySelect>
                <option>전체</option>
                <option>건진</option>
                <option>일반</option>
            </CategorySelect>
           </FilterGroup>
           <SearchButton>조회</SearchButton>
          </FilterBar>
          
          <ContentArea>
          <TableContainer>
            <StyledTable>
            <thead>
    <tr>
      <th rowSpan="2">No</th>
      <th rowSpan="2">검사코드</th>
      <th rowSpan="2">검사명</th>
      <th rowSpan="2">검사수가</th>
      <th rowSpan="2">구분</th>
      <th colSpan="3">합계</th>
      {months.map(month => <th colSpan="3" key={month}>{month}</th>)}
    </tr>
    <tr>
      <th>전체</th><th>예건</th><th>중건</th>
      {months.map(month => (
        <>
          <th key={`${month}-전체`}>전체</th>
          <th key={`${month}-예건`}>예건</th>
          <th key={`${month}-중건`}>중건</th>
        </>
      ))}
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <>
        <tr>
          <td rowSpan="2">{index + 1}</td>
          <td rowSpan="2">{item.code}</td>
          <td rowSpan="2">{item.name}</td>
          <td rowSpan="2">{item.price.toLocaleString()}</td>
          <td>검사건수</td>
          <td style={{fontSize: "9px", color: "#333"}}>{item.rows[0].total}</td>
          <td style={{fontSize: "9px", color: "#333"}}>{item.rows[0].예건}</td>
          <td style={{fontSize: "9px", color: "#333"}}>{item.rows[0].중건}</td>
          {/* 월별 loop */}
          {months.map(() => (
            <>
              <td>-</td><td>-</td><td>-</td>
            </>
          ))}
        </tr>
        <tr>
          <td>검사비용</td>
          <td style={{fontSize: "9px", color: "#333"}}>{item.rows[1].total.toLocaleString()}</td>
          <td style={{fontSize: "9px", color: "#333"}}>{item.rows[1].예건.toLocaleString()}</td>
          <td style={{fontSize: "9px", color: "#333"}}>{item.rows[1].중건.toLocaleString()}</td>
          {/* 월별 loop */}
          {months.map(() => (
            <>
              <td>-</td><td>-</td><td>-</td>
            </>
          ))}
        </tr>
      </>
    ))}
  </tbody>

  <tfoot>
    <tr>
      <td colSpan="5">총합계</td>
      <td>161</td><td>102</td><td>59</td>
      {/* 월별 총합도 넣을 수 있음 */}
      {months.map(() => (
        <>
          <td></td><td></td><td></td>
        </>
      ))}
    </tr>
  </tfoot>
            </StyledTable>
          </TableContainer>
          </ContentArea>
        </PageWrapper>
    )
}

export default CostTable;