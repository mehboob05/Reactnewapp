
import {useState} from 'react';

function Calulator (){
const [add,setAdd] = useState(0);

const adding =() => {
    setAdd(add +1)
}
const sub =() => {
    setAdd(add -1)
    if(add == 0){
       setAdd(0)
    }
}
const Reseting =() => {
    setAdd(0)
}
    return(
        <div>
                <h1> Result value is:{add}</h1>
            <button onClick={adding} style={{width:"70px",height:"30px", borderRadius:"10px",backgroundColor:"green",color:"white",border:"1px solid green"}}>+</button>
            <button onClick={Reseting}style={{width:"70px",height:"30px", borderRadius:"10px",backgroundColor:"gray",color:"white",border:"1px solid gray"}}>Reset</button>
            <button onClick={sub} style={{width:"70px",height:"30px", borderRadius:"10px",backgroundColor:"red",color:"white",border:"1px solid red"}}>-</button>
        </div>
    );
}
export default Calulator;