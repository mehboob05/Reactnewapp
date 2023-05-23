import Calculator from './Calculator';
import './App.css';
import Arrayfunction from './Arrayfunction';
// import Firstcom from './Firstcom';

function App() {
  const name="Mehboob Ahmad";
  const edu = "Master Of Computer Science";
  return (
    <div className="App">
      {/* <Firstcom Myname={name} Myedu={edu}/> */}
      <Calculator/>
      <br/>
      <Arrayfunction/>
    </div>
  );
}

export default App;
