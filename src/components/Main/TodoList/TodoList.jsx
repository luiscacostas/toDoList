import { useState } from 'react'
import React from "react";
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid';
import data from './data'
import './TodoList.css'


const TodoList = () => {
  const [items, setItems] = useState(data)
  const [values, setValues] = useState({
    title: '',
    desc: '',
    deadline:''
  });

    const renderItems = () => items.map((item, i) => <TodoItem key={uuidv4()} dataItem={item} deleteCard={()=>deleteItem(i)} editCard={()=>editItem(i)} />);

    const clearItems = () => setItems([])
    
    const resetItems = () => setItems(data)
  
    const deleteItem = (pos)=> {
      const remainingItems = items.filter((item, index)=> index !== pos);
      setItems(remainingItems)
    }
  
    const editItem = (pos)=>{
      alert('Editando Item '+ pos)
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault()
      const {title, desc, deadline} = values;
    
      
      const newItem = {title, desc, deadline, isDone:false}
      setItems([...items, newItem])

    setValues({
      title: '',
      desc: '',
      deadline: ''
    });
    }
  
    const handleChange = (e) => {
      setValues({
          ...values,
          [e.target.name]: e.target.value
      })
    }
  
  return <section>
    <button onClick={clearItems}>Borrar Todo</button>
    <button onClick={resetItems}>Recargar</button>
    <button onClick={()=>deleteItem(1)}>borrar</button>
    <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name">Título</label>
          <input 
          type="text" 
          name="title"
          value={values.title} 
          placeholder='Nombre de tu tarea' 
          onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="price">Descripción</label>
          <input 
          type="text" 
          name="desc" 
          value={values.desc}
          placeholder='Describe tu tarea' 
          onChange={handleChange}/>

        </div>

        <div>
          <label htmlFor="deadline">Deadline</label>
          <input 
          type="text" 
          name="deadline"
          value={values.deadline}  
          placeholder='Fecha de finalizacion' 
          onChange={handleChange} />
        </div>
        
        {
        values.title && values.desc && values.deadline?
        <button type="submit">ADD</button>:
        <i>Por favor rellena todos los campos</i>
        }
        
      </form>
    {renderItems()}
  </section>;
};

export default TodoList;
