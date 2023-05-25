
import { useState } from "react";

function Practice (){

    const [fruit,setFruit] = useState([]);
    const [txt,setTxt] = useState("")
    
    const newitem = () =>{
        if(txt == ""){
            setTxt("")
        }
        else{
            const newAr = [...fruit,txt];
            setFruit(newAr); 
            setTxt("")
        }
     
    }

    const updateitem = (event) =>{
        setTxt(event.target.value);
    }
// delete item 
 const deleteitem = (item) => {
        const res = fruit.filter( (elem) => {
            return elem != item
        })
        setFruit(res)
 }

    return(
        <div>
           <br/>
           <input type="text" onChange={updateitem} value={txt}/>
           <button onClick={newitem}>Add New Item</button>
          
           <ul type="circle">
              {
                fruit.map( (item) =>{
                    return <li>{item} <button onClick={ () =>{deleteitem(item)} }>X</button> </li>
                })
              }
           </ul>
        </div>
    )
}
export default Practice;