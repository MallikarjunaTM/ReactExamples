import './App.css';
import React, { useState } from 'react';
import Item from './components/Item';

const nameList = [
  { name: 'tamoto', calories: 20 },
  { name: 'rice', calories: 30 },
  { name: 'candy', calories: 100 }
]


function App() {
  const [list, setList] = useState(nameList);
  const [editable, setEditable] = useState(false);

  const removeUnhealthyList = e => {
    const filteredItems = list.filter(item => item.calories <= 50);
    setList(filteredItems)
  }

  const removeItemhandle = (e, item) => {

    const filteredItem = list.filter(itemFilter => itemFilter.name !== item.name);
    setList(filteredItem);

  }

  const onDoubleClick = e => {
    const initialvalue = editable;
    setEditable(true);
  }

  const onKeyPress = (e,index)=>{
    
    if(e.key==='Enter'){
      setEditable(false)
      const alist=[...list]
      const newList=alist.map((listitem,ListItemindex)=>{
        
        if(ListItemindex===index){
          listitem.name=e.target.value;
          return listitem;  
        }
        return listitem;
      })
      
      setList(newList);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>GroceryList</h1>
        {list.map((item, index) => 
        <Item key={index} 
              name={item.name} 
              calories={item.calories} 
              onClick={(e) => removeItemhandle(e, item)}
              onDoubleClick={onDoubleClick} 
              editable={editable}
              onKeyPress={(e)=>onKeyPress(e,index)}
        />)}
        <button onClick={removeUnhealthyList} className='remove-button'>Remove Unhealthy</button>
      </header>
    </div>)


}
export default App;
