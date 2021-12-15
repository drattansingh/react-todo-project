import React from "react"
import { useState, useEffect } from "react/cjs/react.development"
import styles from "./TodoItem.module.css"
import {FaTrash} from "react-icons/fa"

const TodoItem=props=>
{
    const [editing, setEditingfunc]=useState(false)

    // automatically called upon deleting
    useEffect(()=>
    {
        return()=>
        {
            console.log("cleaning up")
        }
    }, [])

    const handleEditing=()=>
    {
        setEditingfunc(true)
    }

    const handleUpdatedDone=(event)=>
    {
        if(event.key==="Enter") setEditingfunc(false)
    }

    const completedStyle = 
    {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    /* This is a shorthand called destructuring to use shorter names. Without this I'd have to type below
    props.todo.id, or props.todo.completed, or props.todo.title */
    const{completed, id, title}=props.todo

    let viewMode={}
    let editMode={}

    if(editing) viewMode.display="none"
    else editMode.display="none"

    return(<li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}>
            <input 
                className={styles.checkbox}
                type="checkbox" 
                checked={completed}
                onChange={()=>props.handleChangeProps(id)}
                //onChange={()=>console.log("checkbox was clicked")}
            />
            <button onClick={()=>props.deleteTodoProps(id)} className="deletebtn"><FaTrash/></button>
            <span style={completed?completedStyle:null}>{title}</span>
        </div>
        <input 
            type="text" 
            className={styles.textInput} 
            style={editMode} 
            value={title} 
            //onChange={e=>{console.log(e.target.value, id)}}
            onChange={e=>{props.setUpdate(e.target.value, id)}}
            onKeyDown={handleUpdatedDone}
        />
        </li>);

}/**'const todoItem=props=>' delimiter */

export default TodoItem




// import React from "react"
// import styles from "./TodoItem.module.css"

// class TodoItem extends React.Component 
// {
//     // object editing for all the items
//     state=
//     {
//         editing:false,
//     }

//     handleEditing=()=>
//     {
//         console.log("edit activated");

//         this.setState({
//             editing:true,
//         })        
//     }/* 'handleEditing=(e)=>' delimiter */

//     handleUpdatedDone=(event)=>
//     {
//         console.log(event.key);

//         if(event.key==="Enter") this.setState({editing:false}) 

//     }/* 'handleUpdatedDone=(e)=>' delimiter */

//     componentWillUnmount()
//     {
//         console.log("item has been deleted")
//     }


//   render(){
//     const completedStyle = 
//     {
//         fontStyle: "italic",
//         color: "#595959",
//         opacity: 0.4,
//         textDecoration: "line-through",
//     }

//     let viewMode={}
//     let editMode={}

//     if(this.state.editing) viewMode.display="none"
//     else editMode.display="none"
    
//     /* This is a shorthand called destructuring to use shorter names. Without this I'd have to type below
//     props.todo.id, or props.todo.completed, or props.todo.title */
//     const{completed, id, title}=this.props.todo

//     return(<li className={styles.item}>
//         <div onDoubleClick={this.handleEditing} style={viewMode}>
//             <input 
//                 className={styles.checkbox}
//                 type="checkbox" 
//                 checked={completed}
//                 onChange={()=>this.props.handleChangeProps(id)}
//                 //onChange={()=>console.log("checkbox was clicked")}
//             />
//             <button onClick={()=>this.props.deleteTodoProps(id)}>Delete</button>
//             <span style={completed?completedStyle:null}>{title}</span>
//         </div>
//         <input 
//             type="text" 
//             className={styles.textInput} 
//             style={editMode} 
//             value={title} 
//             //onChange={e=>{console.log(e.target.value, id)}}
//             onChange={e=>{this.props.setUpdate(e.target.value, id)}}
//             onKeyDown={this.handleUpdatedDone}
//         />
//         </li>);
        
//   }// render
// }

// export default TodoItem




/* I did below as a function and it works pretty well however functions can't handle the setstate event handler so I
had to do it over as a class above */


// import React, {setState} from 'react'
// import styles from "./TodoItem.module.css"

// function TodoItem(props)
// {
//     const completedStyle = 
//     {
//         fontStyle: "italic",
//         color: "#595959",
//         opacity: 0.4,
//         textDecoration: "line-through",
//     }

//     const state=
//     {
//         editing:false,
//     }


//     let viewMode={}
//     let editMode={}

//     const handleEditing=(e)=>
//     {e.preventDefault()
//         console.log("edit activated");
//         setState({
//             editing:true,
//         })
        
//     }

    

//     if(state.editing) viewMode.display="none"
//     else editMode.display="none"

//     /* This is a shorthand called destructuring to use shorter names. Without this I'd have to type below
//     props.todo.id, or props.todo.completed, or props.todo.title */
//     const{completed, id, title}=props.todo
//     return(<li className={styles.item}>
//         <div onDoubleClick={handleEditing} style={viewMode}>
//             <input 
//                 className={styles.checkbox}
//                 type="checkbox" 
//                 checked={completed}
//                 onChange={()=>props.handleChangeProps(id)}
//             />
//             <button onClick={()=>props.deleteTodoProps(id)}>Delete</button>
//             <span style={completed?completedStyle:null}>{title}</span>
//         </div>
//         <input type="text" className={styles.textInput} style={editMode} />
//         </li>);    
    
// }

// export default TodoItem