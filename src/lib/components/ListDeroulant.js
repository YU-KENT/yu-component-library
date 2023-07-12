import React from "react";
import "./ListDeroulant.css"
const ListDeroulant =({
    onChange,
    datas,
    optionName,
    valueName,

}) =>{

      return(
      <div className="bloc">
      <select id='myselect' onChange={(e) => onChange(e.target.value)}>
      {datas.map((data,index) => {
      return <option className='option' key={index} value={valueName?data[valueName]:data[optionName]}>{data[optionName]}</option>})}
      </select>
      </div>
      )

}
export default ListDeroulant