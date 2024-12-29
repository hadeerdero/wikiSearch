
import "./App.css";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
function App() {
  const calBackFun = (e)=>{
    console.log(e)
}
  return (
    <div className="App">
      <Button calBackFun={calBackFun}> single</Button>

      {/* <p>React app</p> */}
      <ButtonGroup>
      <Button calBackFun={calBackFun}> first child</Button>
      <Button calBackFun={calBackFun}> second child</Button>



      </ButtonGroup>
      
    </div>
  );
}

export default App;
