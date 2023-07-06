
const ListDeroulant =({
    onChange,
    datas,
    optionName,
    valueName,

}) =>{

      return(    <div> <span>Hello Wordl</span>
      <select className='' onChange={(e) => onChange(e.target.value)}>
      {datas.map((data,index) => {
      return <option className='' key={index} value={valueName?data[valueName]:''}>{data[optionName]}</option>})}
      </select>
      </div>
      )

}
export default ListDeroulant