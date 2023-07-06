# simple-component-libraryA library of React components created using 
`create-react-app`.

## InstallationRun the following command:
`npm install yu-component-library`

## example
```javascript
// Import the library
import ListDeroulant from 'yu-component-library'

// Usage example
const App = () => (
  <div >
    <h1>Hello React</h1>
    <ListDeroulant 
    datas = {states}
    optionName='name'
    valueName='abbreviation'
    onChange={(value)=>console.log(value)}
    />
  </div>
);

