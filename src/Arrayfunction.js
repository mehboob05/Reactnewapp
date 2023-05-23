

import {useState} from 'react';

function Arrayfunction (){

   const [fruits , setFruits] = useState(["Apple","Mango","Orange","Peach","Pineapple"]); 

   const Adding = () =>{
    alert("hello")
   }
    return(
        <div>
            <input type='text'/>
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