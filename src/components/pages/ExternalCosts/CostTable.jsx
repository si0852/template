import React from 'react';
import TableContainer from '../../../common/TableContainer'
import TableRowGroup from './TableRowGroup';
import { StyledTable } from '../../../styles/tableStyle';

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
  return (
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
            <th className="sum-header">전체</th><th className="sum-header">예건</th><th className="sum-header">중건</th>
            {months.map(month => (
              <React.Fragment key={month}>
                <th>전체</th><th>예건</th><th>중건</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRowGroup key={item.code} item={item} index={index} months={months} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">총합계</td>
            <td>161</td><td>102</td><td>59</td>
            {months.map((_, idx) => (
              <React.Fragment key={idx}>
                <td></td><td></td><td></td>
              </React.Fragment>
            ))}
          </tr>
        </tfoot>
      </StyledTable>
    </TableContainer>
  );
};

export default CostTable;
