import React,{useState} from 'react'
import './main.css'
import ToDo  from './ToDo'
function App() {
    const [data,setData]=useState("")
    const [arrData,setArrData]=useState([])
    
   
    const NoBorder=()=>{
        
        document.getElementById("input").style.outline="none";
    }
    const dataChanged=(event)=>{
        setData(event.target.value)
      
    }
    
    /* Function for adding to do lotes in the application */
    const addNote=()=>{
        if(data!==""){

            setArrData((oldItems)=>{
                return [...oldItems,data]
            })
        }else{
            alert("You can not leave the field blank")
        }
      /*   setArrData([...arrData,data]) */
      setData("")
       
      
    }
    
    /* ONKEY PRESSED EVENT */
    const keyPressed=(event)=>{
        if(event.keyCode===13){
            addNote();
        }
    }


const deleteItem=(id)=>{
    console.log(id)
    /* we are using call back function in setArrData function */
    setArrData(()=>{
        /* here we are using filter whichh it self use call back function */
        return arrData.filter((arrElement,index)=>{
            /* return if two ids does not match if they match then delete the toDoList item */
            return id!==index;
        })
    })
    
}
   
    return (
        
        <div className="main-div">
            <div className="main-inside-div">
            <h1>ToDo-List</h1>
            <div className="input-div">
            <input type="text" id="input" onKeyUp={keyPressed} onClick={NoBorder} value={data} onChange={dataChanged} placeholder="Add a Item" />
            <button className="btn"  onClick={addNote} >+</button>
            </div>
            <div className="Node-Taken">
          <ol>
              {arrData.map((valore,index)=>{
                 return (
                 <ToDo text={valore} key={index} Selected={deleteItem} id={index } indexNumber={index}/>
              )})}
          </ol>
            </div>
            </div>
        </div>
        
    )
}

export default App;

