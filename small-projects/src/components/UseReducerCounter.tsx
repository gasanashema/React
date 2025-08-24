import React, { useReducer, useState } from 'react'

const ACTIONS = {
    ADD_TODO: 'add-todo',
    REMOVE_TODO: 'remove-todo',
    TOGGLE_TODO: 'toggle-todo'
}

function reducer(todos,action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
           return [newTodo(action?.payload?.name),...todos];
        // case ACTIONS.REMOVE_TODO:
        //     const ind = todos.findIndexOf(action.name)
        //    return [...todos.slice(0,ind),...todos.slice(ind+1)]
        default: 
            return todos;
    }

}

function newTodo(name) {
    return {id:Date.now(),name:name,completed:false}
}
const UseReducerCounter = () => {
    const [todos,dispatch] = useReducer(reducer,[])
    const [name,setName] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}});
        setName('');
    }

  return (
   <>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name="todo" value={name} onChange={e=>setName(e.target.value)} id="" />
    </form>

    <ul>
        {todos.map((val,ind)=>(<li key={val.id}>{val.name}</li>))}
    </ul>
   </>
  )
}

export default UseReducerCounter