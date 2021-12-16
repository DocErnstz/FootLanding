import React, {useEffect, useState} from 'react';
import { CSVLink } from 'react-csv'

const Prelist = () => {
  
  const [prelists, setPrelists] = useState([])
  const [lists, setLists] = useState([['Nombre', 'Apellido', 'Email', 'Telefono']]);
  const [text, setText] = useState('');

  useEffect(()=>{
    async function getData(){
      let prelistData = [];
      try {
        prelistData = await fetch('https://futliteapi.herokuapp.com/prelist', {
          method: 'GET'
        }).then(res => res.json());
        const newLists = lists;
        prelistData.prelists.map((item)=>{
        newLists.push([item.nombre, item.apellido, item.email, item.telefono]);
        })
        setLists(newLists)
      }catch(err){
        throw err;
      }
      
      setPrelists(prelistData.prelists);
      console.log(prelistData.prelists);
    }
    getData();
  }, [])

  console.log(text)
  
  return (
    <section id="Prelist">
      {text !== 'futlite123' && <div id="pass">
        <label>Contrasena</label>
        <input type="password" name="text" onChange={(e) => setText(e.target.value)} />
      </div>}
      <CSVLink style={{color: 'red', fontSize: '30px', margin: '3%'}} data={lists} target="_blank">DESCARGAR CSV</CSVLink>
      <hr style={{width: '50%', color: '#F1505B', border: '2px solid'}}/>
      {prelists.length ? prelists.map((user, index)=>{
        return <>
          <h3>{prelists.length - index}.- {user.nombre} {user.apellido}</h3>
          <h4>{user.email} - {user.telefono}</h4>
          <hr style={{width: '50%', color: '#F1505B', border: '2px solid'}}/>
        </>
      }) : ''}
    </section>
  )
}

export default Prelist;