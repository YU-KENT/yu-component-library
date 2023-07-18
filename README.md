# Requirements
React Table Library requires the following libraries to be installed:
- node >= 18.15.0.   
- "react" >= "^18.2.0",
- "react-dom" >= "^18.2.0"

# simple-component-libraryA library of React components created using 
`create-react-app`.

## InstallationRun the following command:
`npm install yu-component-library`

## example
```javascript
// Import the library
import ListDeroulant from 'yu-component-library'

// Usage example
const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    }]
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

```

## Local Development
1. `npm install`
2. `npm build-dev`
3. `npm start`
The last step starts documentation app as a simple webserver on http://localhost:3000.

### The examples

The examples are hosted within the docs folder and are ran in the simple app that loads the ListDeroulant.