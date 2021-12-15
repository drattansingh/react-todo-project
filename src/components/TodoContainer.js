import React from 'react'
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import {v4 as uuidv4} from "uuid";
import { useState, useEffect } from 'react/cjs/react.development';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';

const TodoContainer=()=>
{
    //const[todos, setTodos]=useState([])

    // useEffect(()=>
    // {
    //     console.log("useeffect has been executed")

    //     // getting the stored items
    //     const temp=localStorage.getItem("todos")
    //     const loadedTodos=JSON.parse(temp)

    //     if(loadedTodos) setTodos(loadedTodos)
    // }, [setTodos]);

    const[todos, setTodos]=useState(getInitialTodos())

    function getInitialTodos()
    {
        // this line loads the data from the website in localstorage
        // fetch("https://jsonplaceholder.typicode.com/todos?_limit=15")
        //     .then(Response=>Response.json()).then(data=>setTodos(data));

        // get the stored items in local storage
        const temp= localStorage.getItem("todos")
        const savedTodos=JSON.parse(temp)
        return savedTodos || [] // return savedtodos or an empty array
    }

    // we could use multiple calls for useEffect which is when something changes. Usestate works the same way
    // useeffect runs on every render by default
    useEffect(()=>
    {
        // storing todos items
        const temp=JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    const handleChange=(id)=>
    {
        setTodos(prevState => 
            prevState.map(todo=>
            {
                if(todo.id===id)
                return{
                    ...todo,
                    completed: !todo.completed,
                }
                return todo
            })
        )
    }


    const delTodo=(id)=>
    {
        setTodos([ 
            ...todos.filter(todo=>{return todo.id!==id}),
        ])
    }

    const addTodoItem=(title)=>
    {
        const newTodo=
        {
            id:uuidv4(),
            title:title,
            completed:false
        };

        setTodos([...todos, newTodo])
    }

    // event handler that was from TodoList that was raised in TodoItem
    const setUpdate=(updatedTitle, id)=>
    {
        //console.log(updatedTitle, id)
        setTodos(todos.map(todo=>
            {
                if(todo.id===id) todo.title=updatedTitle
                return todo;
            })
        )
    }

    return(
        // wrapping everything with the react fragment because cannot render multiple jsk
        // similar to wrapping multiple lines in a div
        <>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={
            <div className="container">
                <div className="inner">
                    <Header/>
                    <InputTodo addTodoProps={addTodoItem}/>
                    <TodosList todos={todos} 
                    handleChangeProps={handleChange}
                    deleteTodoProps={delTodo}
                    setUpdate={setUpdate} />
                </div>
            </div>
            }>
        </Route>  
        <Route path="/about" element={<About/>}></Route>     
        <Route path="*" element={<NotMatch/>}></Route>
        </Routes>
        </>
    )

}/**'const TodoContainer=()=>' delimiter */

export default TodoContainer





// import React from 'react'
// import TodosList from './TodosList';
// import Header from './Header';
// import InputTodo from './InputTodo';
// import {v4 as uuidv4} from "uuid";

// class TodoContainer extends React.Component
// {/*
//     This is the state array of objects hardcoded data. 
//     Below I modified this to load from actual data
//     state=
//     {
//         todos:
//         [
//             {
//                 id:uuidv4(),
//                 title:"setup development environment",
//                 completed: true
//             },
//             {
//                 id:uuidv4(),
//                 title:"develop website and add content",
//                 completed: false
//             },
//             {
//                 id:uuidv4(),
//                 title:"deploy to live server",
//                 completed: true
//             }
//         ]
//     }; */ 

//     state={todos:[],} // an empty array of objects to push data in

//     // load the data from the url
//     /* When components get rendered to the DOM, whatever is placed in componentDidMount method gets executed
    
//     N.B. setState is called in this method, so render method will be called twice but this will happen before
//     the browser updates the view*/
//     componentDidMount()
//     {
//         // output to the console
//         // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
//         //     .then(Response=>Response.json()).then(data=>console.log(data));

//         // lod to the todos array of objects
//         // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
//         //     .then(Response=>Response.json()).then(data=>this.setState({todos:data}));

//         const temp=localStorage.getItem("todos")
//         const loadedTodos=JSON.parse(temp)
//         if(loadedTodos) this.setState({todos:loadedTodos})

//     }/* 'componentDidMount()' delimiter */

//     componentDidUpdate(prevProps, prevState)
//     {
//         if(prevState.todos!==this.state.todos)
//         {
//             const temp=JSON.stringify(this.state.todos)
//             localStorage.setItem("todos", temp)
//         }
//     }

//     handleChange=(id)=>
//     {
//         this.setState(prevState =>({ 
//             todos:prevState.todos.map(todo=>
//             {
//                 if(todo.id===id)
//                 return{
//                     ...todo,
//                     completed: !todo.completed,
//                 }
//                 return todo
//             }),
//         }))
//     };

//     delTodo=(id)=>
//     {
//         this.setState({ 
//             todos: 
//             [
//                 ...this.state.todos.filter(todo=>{
//                     return todo.id!==id;
//                 })
//             ]
//         });
//     };

//     addTodoItem=(title)=>
//     {
//         const newTodo=
//         {
//             id:uuidv4(),
//             title:title,
//             completed:false
//         };

//         this.setState({
//             todos:[...this.state.todos, newTodo]
//         });
//     };

//     // event handler that was from TodoList that was raised in TodoItem
//     setUpdate=(updatedTitle, id)=>
//     {
//         //console.log(updatedTitle, id)
//         this.setState({
//             todos:this.state.todos.map(todo=>
//             {
//                 if(todo.id===id) todo.title=updatedTitle
//                 return todo;
//             }),
//         })
//     }

//     render(){
//         return(
//             <div className="container">
//                 <div className="inner">
//                     <Header/>
//                     <InputTodo addTodoProps={this.addTodoItem}/>
//                     <TodosList todos={this.state.todos} 
//                     handleChangeProps={this.handleChange}
//                     deleteTodoProps={this.delTodo}
//                     setUpdate={this.setUpdate} />
//                 </div>
//             </div>
//         );
//     }/* 'render()' delimiter */
    
    
// }

// export default TodoContainer