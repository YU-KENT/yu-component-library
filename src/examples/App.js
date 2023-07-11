import React from "react";
import { ListDeroulant } from "../lib";
import {states} from'./datas'



  

const App = () => (
    
  <div >
    <h1>Hello React</h1>
    <ListDeroulant 
    datas = {states}
    optionName='name'
    valueName='abbreviation'
    onChange={(value)=>console.log("example",value)}
    />
  </div>
);

export default App;