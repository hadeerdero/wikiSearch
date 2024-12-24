import logo from "./logo.svg";
import { useState, useEffect,useRef } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [term, setTerm] = useState("javaScript");
  // const previousTerm = useRef()
  // useEffect(() => {
  // previousTerm.current = term
  // })
  // const prevTerm = previousTerm.current
    const [debounce,setDebounce] = useState(term)
    const [result, setResult] = useState([])

    useEffect(() => {

      const timeOut = setTimeout(() => {
        console.log("set time out ")
  setDebounce(term)
      // setResult([])
      }, 1200)
      return () => clearTimeout(timeOut)
    },[term])
    useEffect(() => {
      console.log("useEffct")
      const Search = async() => {
        const response = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: 'query',
            list: 'search',
            srsearch: debounce,
            origin: '*',
            format: 'json'
          }
        });
        setResult(response.data.query.search)
      }
        Search();

      // if (!result.length) {
      //   console.log("is statement")
      //   if (debounce) {

      //   Search();
      // }

      // } else {
      //   console.log("else statement")

      // }

    }, [debounce,result.length])
    const fetchResult = result.map((el,index) => {
      return (
        <tr key={el.pageid}>
          <th scope="row" >{ index + 1}</th>
        <td>{el.title}</td>
        <td>{el.snippet}</td>
      </tr>
      )
    })
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="my-3">
              <label htmlFor="exampleFormControleInput" className="form-label">
                Search input
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleForControlInput"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      
    </tr>
  </thead>
  <tbody>
   
   
                { fetchResult}
  </tbody>
</table>
          </div>

        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col">
            <div className="my-3">
              <label htmlFor="exampleSearchInput">Search input</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControleInput"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
              ></input>
            </div>
            <p>Current term :{term}</p>
            <p>prev term :{ prevTerm}</p>
            
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
