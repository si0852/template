import { ValueType } from "realgrid";
 
export const fields = [
  {
    fieldName: "No",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "검사코드",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "검사명",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "검사수가",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "구분",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "합계",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "1월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "2월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "3월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "4월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "5월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "6월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "7월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "8월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "9월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "10월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "11월",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "12월",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체1",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건1",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건1",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체2",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건2",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건2",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체3",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건3",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건3",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체4",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건4",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건4",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체5",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건5",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건5",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체6",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건6",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건6",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체7",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건7",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건7",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체8",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건8",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건8",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체9",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건9",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건9",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체10",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건10",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건10",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체11",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건11",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건11",
    dataType: ValueType.TEXT,
  },{
    fieldName: "전체12",
    dataType: ValueType.TEXT,
  },{
    fieldName: "예건12",
    dataType: ValueType.TEXT,
  },{
    fieldName: "종건12",
    dataType: ValueType.TEXT,
  },
];
 
export const columns = [

  {
    name: "검사코드",
    fieldName: "검사코드",
    width: "127",
    header: {
      text: "검사코드",
    },
  },
  {
    name: "검사명",
    fieldName: "검사명",
    width: "127",
    header: {
      text: "검사명",
    },
  },
  {
    name: "검사수가",
    fieldName: "검사수가",
    width: "127",
    header: {
      text: "검사수가",
    },
  },
  {
    name: "구분",
    fieldName: "구분",
    width: "127",
    header: {
      text: "구분",
    },
  },
  {
    name: "합계",
    fieldName: "합계",
    direction: "horizontal",
    items: [
      "전체",
      "예건",
      "종건"
    ],
    width: "80",
    header: {
      text: "합계",
    },
  },
  {
    name: "1월",
    fieldName: "1월",
    width: "60",
    header: {
      text: "1월",
    },
  },
  {
    name: "2월",
    fieldName: "2월",
    width: "60",
    header: {
      text: "2월",
    },
  },
  {
    name: "3월",
    fieldName: "3월",
    width: "60",
    header: {
      text: "3월",
    },
  },
  {
    name: "4월",
    fieldName: "4월",
    width: "60",
    header: {
      text: "4월",
    },
  },
  {
    name: "5월",
    fieldName: "5월",
    width: "60",
    header: {
      text: "5월",
    },
  },
  {
    name: "6월",
    fieldName: "6월",
    width: "60",
    header: {
      text: "6월",
    },
  },
  {
    name: "7월",
    fieldName: "7월",
    width: "60",
    header: {
      text: "7월",
    },
  },
  {
    name: "8월",
    fieldName: "8월",
    width: "60",
    header: {
      text: "8월",
    },
  },
  {
    name: "9월",
    fieldName: "9월",
    width: "60",
    header: {
      text: "9월",
    },
  },
  {
    name: "10월",
    fieldName: "10월",
    width: "60",
    header: {
      text: "10월",
    },
  },
  {
    name: "11월",
    fieldName: "11월",
    width: "60",
    header: {
      text: "11월",
    },
  },
  {
    name: "12월",
    fieldName: "12월",
    width: "60",
    header: {
      text: "12월",
    },
  },
  {
    name: "전체",
    fieldName: "전체",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건",
    fieldName: "예건",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건",
    fieldName: "종건",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },

  {
    name: "전체1",
    fieldName: "전체1",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건1",
    fieldName: "예건1",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건1",
    fieldName: "종건1",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  }, 
  {
    name: "전체2",
    fieldName: "전체2",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건2",
    fieldName: "예건2",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건2",
    fieldName: "종건2",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },{
    name: "전체3",
    fieldName: "전체3",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건3",
    fieldName: "예건3",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건3",
    fieldName: "종건3",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },{
    name: "전체4",
    fieldName: "전체4",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건4",
    fieldName: "예건4",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건4",
    fieldName: "종건4",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },{
    name: "전체5",
    fieldName: "전체5",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건5",
    fieldName: "예건5",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건5",
    fieldName: "종건5",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },{
    name: "전체6",
    fieldName: "전체6",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건6",
    fieldName: "예건6",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건6",
    fieldName: "종건6",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },{
    name: "전체7",
    fieldName: "전체7",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건7",
    fieldName: "예건7",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건7",
    fieldName: "종건7",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },{
    name: "전체8",
    fieldName: "전체8",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건8",
    fieldName: "예건8",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건8",
    fieldName: "종건8",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },{
    name: "전체9",
    fieldName: "전체9",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건9",
    fieldName: "예건9",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건9",
    fieldName: "종건9",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },{
    name: "전체10",
    fieldName: "전체10",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건10",
    fieldName: "예건10",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건10",
    fieldName: "종건10",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },{
    name: "전체11",
    fieldName: "전체11",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건11",
    fieldName: "예건11",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건11",
    fieldName: "종건11",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },{
    name: "전체12",
    fieldName: "전체12",
    width: "60",
    "type": "data",
    header: {
      text: "전체",
    },
  },
  {
    name: "예건12",
    fieldName: "예건12",
    width: "60",
    "type": "data",
    header: {
      text: "예건",
    },
  },
  {
    name: "종건12",
    fieldName: "종건12",
    width: "60",
    "type": "data",
    header: {
      text: "종건",
    },
  },
  {
    name: "name1",
    fieldName: "name1",
    width: "60",
    height: "0",
    "type": "data",
    header: {
      text: "name1",
    },
  },
  {
    name: "name2",
    fieldName: "name2",
    width: "60",
    "type": "data",
    header: {
      text: "name2",
    },
  }
];

export const layout = [
    "검사코드",
    "검사명",
    "검사수가",
    {
      name: "구분",
      direction: "vertical",
      header: {
        text: "구분",
      },
      items: [
        "name1",
        "name2",
      ],

    },
    {
      name: "합계",
      direction: "horizontal",
      items: [
        "전체",
        "예건",
        "종건"
      ],
      header: {
        text: "합계",
      }
    }, 
    {
      name: "1월",
      direction: "horizontal",
      items: [
        "전체1",
        "예건1",
        "종건1"
      ],
      header: {
        text: "1월",
      }
    }, 
    {
      name: "2월",
      direction: "horizontal",
      items: [
        "전체2",
        "예건2",
        "종건2"
      ],
      header: {
        text: "2월",
      }
    }, 
    {
      name: "3월",
      direction: "horizontal",
      items: [
        "전체3",
        "예건3",
        "종건3"
      ],
      header: {
        text: "3월",
      }
    }, 
    {
      name: "4월",
      direction: "horizontal",
      items: [
        "전체4",
        "예건4",
        "종건4"
      ],
      header: {
        text: "4월",
      }
    }, 
    {
      name: "5월",
      direction: "horizontal",
      items: [
        "전체5",
        "예건5",
        "종건5"
      ],
      header: {
        text: "5월",
      }
    }, 
    {
      name: "6월",
      direction: "horizontal",
      items: [
        "전체6",
        "예건6",
        "종건6"
      ],
      header: {
        text: "6월",
      }
    }, 
    {
      name: "7월",
      direction: "horizontal",
      items: [
        "전체7",
        "예건7",
        "종건7"
      ],
      header: {
        text: "7월",
      }
    }, 
    {
      name: "8월",
      direction: "horizontal",
      items: [
        "전체8",
        "예건8",
        "종건8"
      ],
      header: {
        text: "8월",
      }
    }, 
    {
      name: "9월",
      direction: "horizontal",
      items: [
        "전체9",
        "예건9",
        "종건9"
      ],
      header: {
        text: "9월",
      }
    }, 
    {
      name: "10월",
      direction: "horizontal",
      items: [
        "전체10",
        "예건10",
        "종건10"
      ],
      header: {
        text: "10월",
      }
    }, {
      name: "11월",
      direction: "horizontal",
      items: [
        "전체11",
        "예건11",
        "종건11"
      ],
      header: {
        text: "11월",
      }
    }, 
    {
      name: "12월",
      direction: "horizontal",
      items: [
        "전체12",
        "예건12",
        "종건12"
      ],
      header: {
        text: "12월",
      }
    }
]
 
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