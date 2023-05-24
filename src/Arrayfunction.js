

import {useState} from 'react';

function Arrayfunction (){

   const [fruits , setFruits] = useState([]); 
    const [text,setText] = useState("")
   const Adding = () =>{
   if(text== ""){
    setText("")
   }
   else{
    const newArr = [...fruits,text];
    setFruits(newArr);
    setText("")
   }
    
   }

   const results = (event) =>{
    const txt = event.target.value;
    setText(txt)
   }
   
    return(
        <div>
            <input onChange={results} type='text' value={text}/>
           <button onClick={Adding}>Adding</button>
            <ul>
                {
                    fruits.map( (item,index) =>{
                    return <li key={index}>{item}</li>
                    })
                }
            </ul>
           
            
        </div>
    );
}
export default Arrayfunction;