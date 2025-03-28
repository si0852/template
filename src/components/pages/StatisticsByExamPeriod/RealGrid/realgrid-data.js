import { ValueType } from "realgrid";
 
export const fields = [
  {
    fieldName: "접수일",
    dataType: ValueType.DATE,
  },
  {
    fieldName: "건진 구분",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "건진 장소",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "건진 장소 상세",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "거래처 마스터명",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "대상 구분",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "거래처 코드",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "일반 건진",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "암 검진",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "특검 1차",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "특검 2차",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "채용 1차",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "채용 2차",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "기타 건진",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "총계",
    dataType: ValueType.NUMBER,
  }
];
 
export const columns = [

  {
    name: "접수일",
    fieldName: "접수일",
    width: "127",
    header: {
      text: "접수일",
    },
  },
  {
    name: "건진 구분",
    fieldName: "건진 구분",
    width: "127",
    header: {
      text: "건진 구분",
    },
  },
  {
    name: "건진 장소",
    fieldName: "건진 장소",
    width: "127",
    header: {
      text: "건진 장소",
    },
  },
  {
    name: "건진 장소 상세",
    fieldName: "건진 장소 상세",
    width: "127",
    header: {
      text: "건진 장소 상세",
    },
  },
  {
    name: "거래처 마스터명",
    fieldName: "거래처 마스터명",
    width: "361",
    header: {
      text: "거래처 마스터명",
    },
  },
  {
    name: "대상 구분",
    fieldName: "대상 구분",
    width: "127",
    header: {
      text: "대상 구분",
    },
  },
  {
    name: "거래처 코드",
    fieldName: "거래처 코드",
    width: "127",
    header: {
      text: "거래처 코드",
    },
  },
  {
    name: "일반 건진",
    fieldName: "거래처 코드",
    width: "127",
    header: {
      text: "거래처 코드",
    },
  },
  {
    name: "암 검진",
    fieldName: "암 검진",
    width: "127",
    header: {
      text: "암 검진",
    },
  },
  {
    name: "특검 1차",
    fieldName: "특검 1차",
    width: "127",
    header: {
      text: "특검 1차",
    },
  },
  {
    name: "특검 2차",
    fieldName: "특검 2차",
    width: "127",
    header: {
      text: "특검 2차",
    },
  },
  {
    name: "채용 1차",
    fieldName: "채용 1차",
    width: "127",
    header: {
      text: "채용 1차",
    },
  },
  {
    name: "채용 2차",
    fieldName: "채용 2차",
    width: "127",
    header: {
      text: "채용 2차",
    },
  },
  {
    name: "기타 건진",
    fieldName: "기타 건진",
    width: "127",
    header: {
      text: "기타 건진",
    },
  },
  {
    name: "총계",
    fieldName: "총계",
    width: "127",
    header: {
      text: "총계",
    },
  }
  
];


 
export const rows = [
  {
    검사코드: "D1211",
    검사명: "durabvldo",
    검사수가: 10000,
    구분: "검사건수",
    합계: 0,
    "1월": 0,
    "2월": 0,
    "3월": 0,
    "4월": 0,
    "5월": 0,
    "6월": 1,
    "7월": 2,
    "8월": 4,
    "9월": 11,
    "10월": 2,
    "11월": 5,
    "12월": 1,
  },
  {
    Name: "Evelyn",
    FullName: "Hridaynath K. Ismail",
    Email: "fringilla.euismod@elementum.edu",
    Company: "Aliquam Tincidunt Ltd",
    Age: 28,
  },
];