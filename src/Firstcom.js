
// import Secondcom from "./Secondcom";
// import {useState} from 'react';
function Firstcom (props){
    const [birth,setBirth] =useState(1995);
    const [age,setAge] =useState(19);
    const [name,setName] = useState("Mehboob");

    function upadetbirthdate(){
       setBirth(1999);
        setAge(25);
        setName("Ahmad")
    }
    return(
        <div id="Firstcom">
            <h1>My Birth Date is :{birth} Age is {age} Name is:{name} </h1>
            <Secondcom name={props.Myname} edu={props.Myedu}/>
           <button className="btn" onClick={upadetbirthdate} >Birthdate update</button>
        </div>
    );
}

export default Firstcom;