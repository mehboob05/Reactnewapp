
import { useState } from "react";

function Practice (){

    const [fruit,setFruit] = useState([]);
    const [txt,setTxt] = useState("")
    
    const newitem = () =>{
      const newAr = [...fruit,txt];
      setFruit(newAr); 
      setTxt("")
    }

    const updateitem = (event) =>{
        setTxt(event.target.value);
    }
    return(
        <div>
           <br/>
           <input type="text" onChange={updateitem} value={txt}/>
           <button onClick={newitem}>Add New Item</button>
           <ul>
              {
                fruit.map( (item) =>{
                    return <li>{item}</li>
                })
              }
           </ul>
        </div>
    )
}
export default Practice;