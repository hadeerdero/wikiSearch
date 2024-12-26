import logo from "./logo.svg";
import { useState, useEffect, useRef, useMemo, useCallback, use } from "react";
import "./App.css";
import axios from "axios";
import usePrevState from "./hooks/usePrevState";
import ViewCounter from "./components/ViewCounter"
import ViewText from "./components/ViewText"


function App() {
  // const [count,setCount] = useState(0)
  // const [age,setAge] = useState(1)
  // const [user,setUser] = useState({name:"kareem"})
  // const name = useMemo(()=>{
  //   return user
  // },[user])
  // // const name = 'Kareem'
  // const countHandler = ()=>{
  //   setCount((prev)=>prev+1)
  // }
  // const ageHandler = useCallback(()=>{
  //   console.log("age")
  //   if(!user.age){
  //     setUser((prev)=>{return {...prev,age:30}})

  //   }else{

  //   }return user 
  // },[user])
  const [term, setTerm] = useState("javaScript");
  const [result, setResult] = useState([]); 
  const priviousTerm = usePrevState(term);
  const isInitialFetch = useRef(true);
  useEffect(() => {
    console.log("useEffct");
    const Search = async () => {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          srsearch: term,
          origin: "*",
          format: "json",
        },
      });
      setResult(response.data.query.search);
    };
    if (isInitialFetch.current) {
      if (term) {
        console.log(result.length,"result.length");
        Search();
      }
      isInitialFetch.current = false; // Prevent further initial fetches
    } else if (priviousTerm !== term) {
      console.log(priviousTerm,"priviousTerm");
      const timeOut = setTimeout(() => {
        console.log("set time out ");
        if (term) {
          Search();
        }
      }, 1200);
      return () => clearTimeout(timeOut);
    }
  }, [term, result.length, priviousTerm]);
  const fetchResult = result.map((el, index) => {
    return (
      <tr key={el.pageid}>
        <th scope="row">{index + 1}</th> 
        <td>{el.title}</td>
        <td>{el.snippet}</td>
      </tr>
    );
  });
  return (
    <div className="App">
      {/* <>
      <ViewCounter num={count} increaseCount={countHandler}></ViewCounter>
      <ViewText name={name} addAge={ageHandler} ></ViewText>
      </> */}
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
              <tbody>{fetchResult}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
