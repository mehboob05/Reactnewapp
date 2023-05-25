

import {useRef, useState } from "react";

function Results (){
const [name,setName] = useState([])
const [val,setVal] = useState("");
const inputField = useRef();

const updateItem = (event) =>{
    setVal(event.target.value);
}

const newItemAdd = () =>{
   if(val==0){
    setVal("")
   }
   else{
    const newArr = [...name,val]
    setName(newArr);
    setVal("");
    inputField.current.focus();
   }
}
const deleteData = (index) => {
    const res = name.toSpliced(index,1)
    setName(res);
}

const keypressed = (event) => {
    if(event.key == "Enter"){
        newItemAdd();
    }
}


    return(
        <div>
                <input onChange={updateItem}  onKeyUp={keypressed} type="text" value={val} ref={inputField}/>
                <button onClick={newItemAdd}>Add New Item</button>
            <ul>
                {
                    name.map((item,index)=>{
                        return <li key={index}>{item}<button onClick={ () => {deleteData(index)}}>Delete Item</button></li>
                    })
                }
            </ul> 
        </div>
    )
}

export default Results;