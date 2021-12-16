import React, {useEffect, useState} from 'react';


const Prelist = () => {
  
  const [prelists, setPrelists] = useState([])

  useEffect(()=>{
    async function getData(){
      let prelistData = [];
      try {
        prelistData = await fetch('https://futliteapi.herokuapp.com/prelist', {
          method: 'GET'
        }).then(res => res.json());
      }catch(err){
        throw err;
      }
      setPrelists(prelistData.prelists);
      console.log(prelistData.prelists);
    }
    getData();
  }, [])
  
  return (
    <section id="Prelist">
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