import React, {useState} from 'react'
import {FaPlusCircle} from "react-icons/fa"


const InputTodo=(props)=>
{
    //console.log(useState("hello"))
    
    const[inputText, setInputText]=useState({title:"",})

    const onChange=e=>
    {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit=e=>
    {
        e.preventDefault();
        if(inputText.title.trim())
        {
            props.addTodoProps(inputText.title);
            setInputText({title:"",})            
        }
        else alert("please write item");  
    };

    return(
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text" placeholder="Add todo..." value={inputText.title}
                name="title"
                onChange={onChange} className="input-text"/>
            <button className="input-submit"><FaPlusCircle/></button>
        </form>
    );

}/**'const InputTodo=(props)=>' delimiter */


export default InputTodo






// import React, {useState} from 'react'

// const InputTodo=(props)=>
// {
//     //console.log(useState("hello"))
    
//     const[title, setTitle]=useState("")

//     const onChange=e=>
//     {
//         setTitle(e.target.value)
//     }

//     const handleSubmit=e=>
//     {
//         e.preventDefault();
//         if(title.trim())
//         {
//             props.addTodoProps(title);
//             setTitle("")            
//         }
//         else alert("please write item");  
//     };

//     return(
//         <form onSubmit={handleSubmit} className="form-container">
//             <input type="text" placeholder="Add todo..." value={title}
//                 name="title"
//                 onChange={onChange} className="input-text"/>
//             <button className="input-submit">Submit</button>
//         </form>
//     );

// }/**'const InputTodo=(props)=>' delimiter */


// export default InputTodo






// class InputTodo extends Component
// {
//     state=
//     {
//         title: ""
//     };

//     onChange=e=>
//     {
//         this.setState
//         ({
//             [e.target.name]:e.target.value,
//         });
//     };

//     handleSubmit=e=>
//     {
//         e.preventDefault();
//         if(this.state.title.trim())
//         {
//             this.props.addTodoProps(this.state.title);
//             this.setState({
//                 title:""
//             });
            
//         }
//         else
//         {
//             alert("please write item");
//         }        
//     };

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit} className="form-container">
//                 <input type="text" placeholder="Add todo..." value={this.state.title}
//                     name="title"
//                     onChange={this.onChange} className="input-text"/>
//                 <button className="input-submit">Submit</button>
//             </form>
//         );
//     }/* 'render()' delimiter */
    
    
// }

// export default InputTodo