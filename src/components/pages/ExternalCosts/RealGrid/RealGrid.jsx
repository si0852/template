import { useEffect, useRef } from "react";
import { GridView, LocalDataProvider } from "realgrid";
import { columns, fields, rows, layout } from "./realgrid-data";
import "realgrid/dist/realgrid-style.css"; // RealGrid CSS 추가
 
const RealGrid = () => {
  const realgridElement = useRef(null);

  const getData = async() => {
  await  fetch('https://api.example.com/realgrid-config')
  .then(response => response.json())
  .then(config => {
    console.log("config : ", config)
  })
  }
 
  useEffect(() => {
    const fetchDataAndInitGrid = async() => {
      try{
        const response = await fetch('https://api.example.com/realgrid-config')
        const config = await response.json();
        console.log("config: ", config)
      }catch(error) {
        console.log("error : ", error )
      }
    }
    fetchDataAndInitGrid();
    const container = realgridElement.current;
    const targetTable = container.querySelector('table');
    console.log("targetTable ", container)
    const provider = new LocalDataProvider(true);
    const grid = new GridView(container);
 
    grid.setDataSource(provider);
    provider.setFields(fields);
    grid.setColumns(columns);
    grid.setColumnLayout(layout)
    provider.setRows(rows);
 
    return () => {
      provider.clearRows();
      grid.destroy();
      provider.destroy();
    };
  }, []);
 
  return <div ref={realgridElement} style={{ height: "800px", width: "100%" }}></div>;
}
 
export default RealGrid;